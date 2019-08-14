package com.example.dpinterface;

import com.example.service.JgsService;
import com.example.service.UpsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * 警告数接口
 */

@RestController
@Controller
@RequestMapping("/jgs")
public class Jgsinterface {

    @Resource
    private JgsService jgsService;


    /**
     * 返回警告数
     * @return
     */
    @RequestMapping("/selectjgsnum")
    public Map<String,Object> selectjgsnum(){
        Map<String, Object> resMap = new HashMap<>();
        resMap.put("jgs",jgsService.selectjgsnum());
        return resMap;
    }
    /**
     * 返回警告详细信息
     * @return
     */
    @RequestMapping("/selectjginfo")
    public Map<String,Object> selectjginfo(){
        Map<String, Object> resMap = new HashMap<>();
        List<Map<String,Object>> list = jgsService.selectjginfo();
        if(list.size()>0){
            resMap.put("lt",list.get(0).get("lt"));
            resMap.put("ca",list.get(0).get("ca"));
            resMap.put("d",list.get(0).get("d"));
            resMap.put("jb",list.get(0).get("jb"));
        }else{
            resMap.put("lt","1");
            resMap.put("ca","2");
            resMap.put("d","3");
            resMap.put("jb","4");
        }
        return resMap;
    }

}
