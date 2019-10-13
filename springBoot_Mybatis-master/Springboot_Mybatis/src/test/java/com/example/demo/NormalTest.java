package com.example.demo;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.http.client.ClientProtocolException;
import org.junit.Test;

import java.io.IOException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class NormalTest {

    @Test
    public void test01() throws Exception {

        String url = "https://zhidao.baidu.com/question/65322114.html";
        ProcessBuilder builder = new ProcessBuilder(
                "c:\\Program Files\\Internet Explorer\\iexplore", url);
        builder.start();
        System.out.println("执行test01结束");
    }

    @Test
    public void test02() throws Exception {
        System.out.println("test02开始执行");
        String url = "https://zhidao.baidu.com/question/65322114.html";
        url = url.replaceAll("\"","\'");
        System.out.println("url第一次修改:"+url);
        url = "\"" + url + "\"";
        System.out.println("url第二次修改:"+url);
        NormalTest.browse(url);
        /*ProcessBuilder builder = new ProcessBuilder(
                "c:\\Program Files\\Internet Explorer\\iexplore", url);
        builder.start();*/
        System.out.println("执行test02结束");
    }

    @Test
    public void test03() throws Exception {
        String str = "\n" +
                "{\"total\":\"2\",\"page\":1,\"pagesize\":\"2\",\"rows\":[{\"DeviceID\":0,\"IP\":\"IP地址\",\"Mac\":\"MAC地址\",\"DevName\":\"设备名称\",\"UserName\":\"使用人\",\"adepartName\":\"部门名称\",\"DepartID\":\"部门名称\",\"status\":\"是否开机\",\"RunTime\":\"持续运行时间\",\"LocationId\":\"位置\",\"Registered\":\"是否注册\",\"IsTrustDev\":\"是否可信\",\"Type\":\"Type\",\"aAuditStopTime\":\"审核期限\",\"departName\":\"departName\",\"GateIP\":\"连接IP\",\"CodeRight\":\"来宾上网码使用权限\",\"SwitchIp\":\"交换机IP\",\"SwitchPort\":\"交换机端口\",\"DoxVersion\":\"小助手版本号\",\"isCheckT\":\"isCheckT\",\"AllDepartName\":\"所属部门\",\"TypeName\":\"设备类型\",\"InsertTime\":\"发现时间\",\"Location\":\"位置\",\"Tel\":\"联系电话\",\"EMail\":\"邮箱地址\",\"CPU\":\"CPU型号\",\"DiskSize\":\"硬盘容量\",\"Memory\":\"内存容量\",\"CutOffStopTime\":\"是否隔离\",\"AuditStopTime\":\"审核状态 \",\"AuditTime\":\"审核时间\",\"AllIP\":\"所有IP\",\"AllMac\":\"所有MAC\",\"Mask\":\"掩码\",\"GateWay\":\"网关\",\"Hard\":\"硬盘ID\",\"OSName\":\"操作系统名称\",\"IEVersion\":\"浏览器版本\",\"VerifyUserName\":\"核实人\",\"VerifyTime\":\"核实时间\",\"AuditUserName\":\"审核人\",\"CheckResult\":\"最新检查结果\",\"IsBindUser\":\"是否绑定用户\",\"CheckTime\":\"最新检查时间\",\"ForbidGuest\":\"是否允许来宾\",\"SwitchName\":\"设备所在交换机名称\",\"Vlan\":\"设备所在VLAN\",\"GateIP_Copy\":\"连接IP\",\"isNat\":\"是否NAT设备\",\"LastTime\":\"最后在线时间\",\"isAuth\":\"是否认证\",\"devRoleID\":\"设备角色\",\"AuthType\":\"当前认证方式\",\"RoleID\":\"当前认证角色\",\"AuthUserName\":\"当前认证用户\",\"AuthTime\":\"用户认证时间\",\"RegTime\":\"注册时间\",\"Expand_1\":\"自定义字段1\",\"Expand_2\":\"自定义字段2\",\"Expand_3\":\"自定义字段3\",\"Expand_4\":\"自定义字段4\",\"Expand_5\":\"自定义字段5\",\"Remark\":\"备注\",\"ChangeFlags\":\"安装插件\"},{\"DeviceID\":\"2\",\"IP\":\"191.191.192.1\",\"Mac\":\"B0:51:8E:05:C7:2E\",\"DevName\":\"WIN-084E69KRMR0\",\"UserName\":\"\",\"adepartName\":\"中共吉林省纪律检查委员会\",\"DepartID\":\"001\",\"status\":\"开机\",\"RunTime\":\"\",\"LocationId\":\"0\",\"Registered\":\"\",\"IsTrustDev\":\"\",\"Type\":\"101\",\"aAuditStopTime\":\"9999-12-31 00:00:00\",\"departName\":\"中共吉林省纪律检查委员会\",\"GateIP\":\"191.191.195.1\",\"CodeRight\":\"\",\"SwitchIp\":\"\",\"SwitchPort\":\"\",\"DoxVersion\":\"\",\"isCheckT\":\"0\",\"AllDepartName\":\"中共吉林省纪律检查委员会\",\"TypeName\":\"PC\",\"InsertTime\":\"2019-08-02 16:57:20\",\"Location\":\"\",\"Tel\":\"\",\"EMail\":\"\",\"CPU\":\"Intel(R) Core(TM) i5-2400 CPU @ 3.10GHz\",\"DiskSize\":\"250 GB\",\"Memory\":\"8 GB\",\"CutOffStopTime\":\"未隔离\",\"AuditStopTime\":\"未审核\",\"AuditTime\":\"\",\"AllIP\":\"191.191.190.1,172.19.44.99,191.191.192.1,191.191.193.1,191.191.194.1,191.191.195.1,191.191.196.1,191.191.197.1,191.191.198.1,191.191.199.1,191.191.200.1,191.191.201.1,191.191.202.1,191.191.203.1,191.191.204.1,191.191.205.1,191.191.206.1,191.191.207.1,191.1\",\"AllMac\":\"B0:51:8E:05:C7:2C,B0:51:8E:05:C7:2F,B0:51:8E:05:C7:2E,B0:51:8E:05:C7:2D\",\"Mask\":\"255.255.255.0\",\"GateWay\":\"0.0.0.0\",\"Hard\":\"HARD:TS256GSSD370SC784670598134217727B0:51:8E:05:C7:2E\",\"OSName\":\"Microsoft Windows 7 Ultimate Edition 64-bit Service Pack 1\",\"IEVersion\":\"IE8.0.7601.17514\",\"VerifyUserName\":\"\",\"VerifyTime\":\"\",\"AuditUserName\":\"\",\"CheckResult\":\"\",\"IsBindUser\":\"不绑定\",\"CheckTime\":\"\",\"ForbidGuest\":\"允许\",\"SwitchName\":\"\",\"Vlan\":\"\",\"GateIP_Copy\":\"191.191.195.1\",\"isNat\":\"是\",\"LastTime\":\"2019-08-02 17:00:20\",\"isAuth\":\"\",\"devRoleID\":\"\",\"AuthType\":\"\",\"RoleID\":\"\",\"AuthUserName\":\"\",\"AuthTime\":\"\",\"RegTime\":\"\",\"Expand_1\":\"\",\"Expand_2\":\"\",\"Expand_3\":\"\",\"Expand_4\":\"\",\"Expand_5\":\"\",\"Remark\":\"web\",\"ChangeFlags\":\"\"},{\"DeviceID\":\"1\",\"IP\":\"191.191.193.100\",\"Mac\":\"00:90:FB:57:B6:77\",\"DevName\":\"\",\"UserName\":\"\",\"adepartName\":\"中共吉林省纪律检查委员会\",\"DepartID\":\"001\",\"status\":\"开机\",\"RunTime\":\"\",\"LocationId\":\"0\",\"Registered\":\"\",\"IsTrustDev\":\"\",\"Type\":\"101\",\"aAuditStopTime\":\"9999-12-31 00:00:00\",\"departName\":\"中共吉林省纪律检查委员会\",\"GateIP\":\"\",\"CodeRight\":\"\",\"SwitchIp\":\"\",\"SwitchPort\":\"\",\"DoxVersion\":\"\",\"isCheckT\":\"0\",\"AllDepartName\":\"中共吉林省纪律检查委员会\",\"TypeName\":\"PC\",\"InsertTime\":\"2019-07-24 15:53:42\",\"Location\":\"\",\"Tel\":\"\",\"EMail\":\"\",\"CPU\":\"\",\"DiskSize\":\"\",\"Memory\":\"\",\"CutOffStopTime\":\"未隔离\",\"AuditStopTime\":\"未审核\",\"AuditTime\":\"\",\"AllIP\":\"\",\"AllMac\":\"\",\"Mask\":\"255.255.255.0\",\"GateWay\":\"\",\"Hard\":\"472d8c80e51e2bd5cebbb4ac7adfa4d5\",\"OSName\":\"\",\"IEVersion\":\"\",\"VerifyUserName\":\"\",\"VerifyTime\":\"\",\"AuditUserName\":\"\",\"CheckResult\":\"\",\"IsBindUser\":\"不绑定\",\"CheckTime\":\"\",\"ForbidGuest\":\"允许\",\"SwitchName\":\"\",\"Vlan\":\"\",\"GateIP_Copy\":\"\",\"isNat\":\"\",\"LastTime\":\"2019-08-02 17:00:22\",\"isAuth\":\"\",\"devRoleID\":\"\",\"AuthType\":\"\",\"RoleID\":\"\",\"AuthUserName\":\"\",\"AuthTime\":\"\",\"RegTime\":\"\",\"Expand_1\":\"\",\"Expand_2\":\"\",\"Expand_3\":\"\",\"Expand_4\":\"\",\"Expand_5\":\"\",\"Remark\":\"自动发现设备!\",\"ChangeFlags\":\"\"},{\"DeviceID\":\"3\",\"IP\":\"191.191.192.1\",\"Mac\":\"B0:51:8E:05:C7:2E\",\"DevName\":\"WIN-084E69KRMR0\",\"UserName\":\"\",\"adepartName\":\"中共吉林省纪律检查委员会\",\"DepartID\":\"003\",\"status\":\"开机\",\"RunTime\":\"\",\"LocationId\":\"0\",\"Registered\":\"\",\"IsTrustDev\":\"\",\"Type\":\"101\",\"aAuditStopTime\":\"9999-12-31 00:00:00\",\"departName\":\"中共吉林省纪律检查委员会\",\"GateIP\":\"191.191.195.1\",\"CodeRight\":\"\",\"SwitchIp\":\"\",\"SwitchPort\":\"\",\"DoxVersion\":\"\",\"isCheckT\":\"0\",\"AllDepartName\":\"中共吉林省纪律检查委员会\",\"TypeName\":\"PC\",\"InsertTime\":\"2019-08-02 16:57:20\",\"Location\":\"\",\"Tel\":\"\",\"EMail\":\"\",\"CPU\":\"Intel(R) Core(TM) i5-2400 CPU @ 3.10GHz\",\"DiskSize\":\"250 GB\",\"Memory\":\"8 GB\",\"CutOffStopTime\":\"未隔离\",\"AuditStopTime\":\"未审核\",\"AuditTime\":\"\",\"AllIP\":\"191.191.190.1,172.19.44.99,191.191.192.1,191.191.193.1,191.191.194.1,191.191.195.1,191.191.196.1,191.191.197.1,191.191.198.1,191.191.199.1,191.191.200.1,191.191.201.1,191.191.202.1,191.191.203.1,191.191.204.1,191.191.205.1,191.191.206.1,191.191.207.1,191.1\",\"AllMac\":\"B0:51:8E:05:C7:2C,B0:51:8E:05:C7:2F,B0:51:8E:05:C7:2E,B0:51:8E:05:C7:2D\",\"Mask\":\"255.255.255.0\",\"GateWay\":\"0.0.0.0\",\"Hard\":\"HARD:TS256GSSD370SC784670598134217727B0:51:8E:05:C7:2E\",\"OSName\":\"Microsoft Windows 7 Ultimate Edition 64-bit Service Pack 1\",\"IEVersion\":\"IE8.0.7601.17514\",\"VerifyUserName\":\"\",\"VerifyTime\":\"\",\"AuditUserName\":\"\",\"CheckResult\":\"\",\"IsBindUser\":\"不绑定\",\"CheckTime\":\"\",\"ForbidGuest\":\"允许\",\"SwitchName\":\"\",\"Vlan\":\"\",\"GateIP_Copy\":\"191.191.195.1\",\"isNat\":\"是\",\"LastTime\":\"2019-08-02 17:00:20\",\"isAuth\":\"\",\"devRoleID\":\"\",\"AuthType\":\"\",\"RoleID\":\"\",\"AuthUserName\":\"\",\"AuthTime\":\"\",\"RegTime\":\"\",\"Expand_1\":\"\",\"Expand_2\":\"\",\"Expand_3\":\"\",\"Expand_4\":\"\",\"Expand_5\":\"\",\"Remark\":\"web\",\"ChangeFlags\":\"\"},{\"DeviceID\":\"4\",\"IP\":\"191.191.193.100\",\"Mac\":\"00:90:FB:57:B6:77\",\"DevName\":\"\",\"UserName\":\"\",\"adepartName\":\"中共吉林省纪律检查委员会\",\"DepartID\":\"004\",\"status\":\"开机\",\"RunTime\":\"\",\"LocationId\":\"0\",\"Registered\":\"\",\"IsTrustDev\":\"\",\"Type\":\"101\",\"aAuditStopTime\":\"9999-12-31 00:00:00\",\"departName\":\"中共吉林省纪律检查委员会\",\"GateIP\":\"\",\"CodeRight\":\"\",\"SwitchIp\":\"\",\"SwitchPort\":\"\",\"DoxVersion\":\"\",\"isCheckT\":\"0\",\"AllDepartName\":\"中共吉林省纪律检查委员会\",\"TypeName\":\"PC\",\"InsertTime\":\"2019-07-24 15:53:42\",\"Location\":\"\",\"Tel\":\"\",\"EMail\":\"\",\"CPU\":\"\",\"DiskSize\":\"\",\"Memory\":\"\",\"CutOffStopTime\":\"未隔离\",\"AuditStopTime\":\"未审核\",\"AuditTime\":\"\",\"AllIP\":\"\",\"AllMac\":\"\",\"Mask\":\"255.255.255.0\",\"GateWay\":\"\",\"Hard\":\"472d8c80e51e2bd5cebbb4ac7adfa4d5\",\"OSName\":\"\",\"IEVersion\":\"\",\"VerifyUserName\":\"\",\"VerifyTime\":\"\",\"AuditUserName\":\"\",\"CheckResult\":\"\",\"IsBindUser\":\"不绑定\",\"CheckTime\":\"\",\"ForbidGuest\":\"允许\",\"SwitchName\":\"\",\"Vlan\":\"\",\"GateIP_Copy\":\"\",\"isNat\":\"\",\"LastTime\":\"2019-08-02 17:00:22\",\"isAuth\":\"\",\"devRoleID\":\"\",\"AuthType\":\"\",\"RoleID\":\"\",\"AuthUserName\":\"\",\"AuthTime\":\"\",\"RegTime\":\"\",\"Expand_1\":\"\",\"Expand_2\":\"\",\"Expand_3\":\"\",\"Expand_4\":\"\",\"Expand_5\":\"\",\"Remark\":\"自动发现设备!\",\"ChangeFlags\":\"\"}]}\n" +
                "\n";
        JSONObject obj = JSONObject.fromObject(str);//********
        JSONObject resultObj = new JSONObject();
        String total = obj.get("total").toString();
        String page = obj.get("page").toString();
        String pagesize = obj.get("pagesize").toString();
        JSONArray arr  = (JSONArray)obj.get("rows");//********
        arr.remove(0);
        JSONArray arrres  = new JSONArray();
        String type = "001";
        for(int i=0;i<arr.size();i++){
            JSONObject OOO = (JSONObject)arr.get(i);
            if(type.equals(OOO.get("DepartID"))){
                arrres.add(OOO);
            }
        }
        System.out.println("wasai:"+arrres);




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
