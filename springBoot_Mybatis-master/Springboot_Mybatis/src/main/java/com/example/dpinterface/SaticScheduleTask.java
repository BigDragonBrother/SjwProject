package com.example.dpinterface;

import com.example.service.UpsService;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * 定时任务相关
 * 推送动环信息
 */

@Component
@Configuration      //1.主要用于标记配置类，兼备Component的效果。
@EnableScheduling   // 2.开启定时任务
public class SaticScheduleTask {

    @Resource
    private UpsService upsService;



    //3.添加定时任务
    @Scheduled(cron = "0/15 * * * * ?")
    //或直接指定时间间隔，例如：5秒
    //@Scheduled(fixedRate=5000)
    private void configureTasks() {
       try{
           upsService.selectDhInfoListtwo();
           System.out.println("执行定时任务");
       }catch (Exception e){
           e.printStackTrace();
       }

    }
}