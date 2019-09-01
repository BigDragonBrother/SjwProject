package com.example.dpinterface;

import com.example.service.JgsService;
import com.github.pagehelper.PageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * 视频相关
 * 使用java调用ie浏览器
 * 打开某个地址
 */


@Controller
@RequestMapping("/SpOpenSomeUrl")
public class SpOpenSomeUrlinterface {




    /**
     * 使用ie打开某个网址下
     * @return
     */
    @RequestMapping("/openSp")
    @ResponseBody
    public Map<String,Object> openSp(){
        System.out.println("come in openSp()");
        Map<String,Object> map = new HashMap<>();
        try{
            String url = "http://localhost:8081/SjwProject/system/index1";
            url = url.replaceAll("\"","\'");
            url = "\"" + url + "\"";
            SpOpenSomeUrlinterface.browse(url);
            map.put("flg","true");
        }catch (Exception e){
            map.put("flg","false");
            map.put("errorMessage","调用地址异常!方法报错!");
        }
        return map;
    }

    public static void browse(String url) throws Exception {
        // 获取操作系统的名字
        String osName = System.getProperty("os.name", "");
        if (osName.startsWith("Mac OS")) {
            // 苹果的打开方式
            Class fileMgr = Class.forName("com.apple.eio.FileManager");
            Method openURL = fileMgr.getDeclaredMethod("openURL",new Class[] { String.class });
            openURL.invoke(null, new Object[] { url });
        } else if (osName.startsWith("Windows")) {
            // windows的打开方式。
            //打开IE浏览器
            Runtime.getRuntime().exec("cmd /c start iexplore " + url);
        } else {
            // Unix or Linux的打开方式
            String[] browsers = { "firefox", "opera", "konqueror", "epiphany",
                    "mozilla", "netscape" };
            String browser = null;
            for (int count = 0; count < browsers.length && browser == null; count++) {
                // 执行代码，在brower有值后跳出，
                // 这里是如果进程创建成功了，==0是表示正常结束。
                if (Runtime.getRuntime()
                        .exec(new String[] { "which", browsers[count] })
                        .waitFor() == 0)
                    browser = browsers[count];
                if (browser == null)
                    throw new Exception("Could not find web browser");
                else
                    // 这个值在上面已经成功的得到了一个进程。
                    Runtime.getRuntime().exec(new String[] { browser, url });
            }
        }
    }

}
