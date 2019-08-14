package com.example.dpinterface;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 态势感知跳转用接口
 * 目前设计为重定向到别的地址
 */

@Controller
@RequestMapping("/jump")
public class JumpURLinterface {

    //登录账号
    private  static  final  String  LOGAIN_NAME = "admin";
    //登录密码
    private  static  final  String  SECRET_CORE = "21232f297a57a5a743894a0e4a801fc3";
    //端口号
    private  static  final  String  DUANKOU_NUM = "8080";
    //服务器地址
    private  static  final  String  ADDR_URL = "156.8.11.22";



    //告警跳转
    @RequestMapping("tsgzGjJump")
    public String tsgzGjJump(HttpServletResponse response) throws IOException {
        System.out.println("执行跳转");
        //response.sendRedirect("www.baidu.com");
        String jurl = ADDR_URL+":"+DUANKOU_NUM+"/itims/login.action?userName="+LOGAIN_NAME+"&pwd="+SECRET_CORE+"&DMSN=998";
        System.out.println(jurl);
        return "redirect:http://"+jurl;
    }


    //可视化机房返回url
    //http://156.8.11.22:8080/itims/alm/alarm.jsp?mnSbj=alarm&mnCMP=2_0_2&lunchFrom=portal&lunchFuncID=rootalarm_view_active
    //http://10.2.13.15:8080/itims/room/view/view.jsp?mnSbj=topo&mnCMP=1_2&lunchFrom=start&lunchFuncID=roottopo_room
    @RequestMapping("tsgzKshjfJump")
    public String tsgzKshjfJump(){
        String jurl = ADDR_URL+":"+DUANKOU_NUM+"/itims/alm/alarm.jsp?mnSbj=alarm&mnCMP=2_0_2&lunchFrom=portal&lunchFuncID=rootalarm_view_active";
        return "redirect:http://"+jurl;
    }
}