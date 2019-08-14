package com.example.dpinterface;


import com.example.webserverinterface.GetChartsWebserviceImpService;
import com.example.webserverinterface.IGetChartWebservice;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * OA运维监控系统接口
 *
 */
@RestController
@Controller
@RequestMapping("/oayw")
public class OaYwjkxtinterface {

    String AccesskeyOA = "zUvqpKadER2XglrBG3oR/H4V5Nz5zY5m+WVCqUCBoEkN4/M9w12xUdJr0gIYRftf";

    @RequestMapping("SendFile")
    public String SendFile(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getOrSendFile("sendFile",AccesskeyOA);
        System.out.println(ddd);
        return ddd;
    }

    @RequestMapping("receiveFile")
    public String receiveFile(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getOrSendFile("receiveFile", AccesskeyOA);
        System.out.println(ddd);
        return ddd;
    }

    @RequestMapping("getOnlineNum")
    public String getOnlineNum(){
        //收发文数据传输接口

        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getOnlineNum(AccesskeyOA);
        System.out.println(ddd);
        return ddd;
    }

    @RequestMapping("getMeetingInfo")
    public String getMeetingInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getMeetingInfo(AccesskeyOA);
        System.out.println(ddd);
        return ddd;
    }

    @RequestMapping("getPartyInfo")
    public String getPartyInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getPartyInfo(AccesskeyOA);
        System.out.println(ddd);
        return ddd;
    }

    @RequestMapping("getSubInfo")
    public String getSubInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getSubInfo(AccesskeyOA);
        System.out.println(ddd);
        return ddd;
    }

    @RequestMapping("getDubanInfo")
    public String getDubanInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getDubanInfo(AccesskeyOA);
        System.out.println(ddd);
        return ddd;
    }




}
