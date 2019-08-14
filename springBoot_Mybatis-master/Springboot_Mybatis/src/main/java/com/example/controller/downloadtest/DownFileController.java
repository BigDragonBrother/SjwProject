package com.example.controller.downloadtest;

import com.example.utils.FileUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;

/**
 * 测试下载项目中文件
 */
@Controller
@RequestMapping("sys")
public class DownFileController {


    @RequestMapping("downloadFile")
    @ResponseBody
    public void Download(HttpServletResponse response) {
        String fileName = "a.jpg";
        String result = FileUtil.downloadFile(response, fileName);
        System.out.println("33333"+result);

    }

}
