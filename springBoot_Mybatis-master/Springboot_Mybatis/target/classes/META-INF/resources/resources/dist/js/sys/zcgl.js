// var pageSize = 10;
var iDisplayLength = 12;
var Tools = {
    data: {
        title: {
            type4: "虚拟化",
            type1: "网络设备",
            type2: "中间件",
            type3: "存储",
            type5: "安全设备",
            type6: "服务器",
            type7: "数据库",
            type8: "其他"
        },

        //4:虚拟化	1：网络设备		2：中间件		3：存储		5：安全设备		6：服务器		7：数据库		8：其他
        header: {
            type4: ["序号", "资产编号", "资产名称", "状态", "管理IP", "主机", "保密级别", "操作系统", "CPU", "内存", "存储", "用途"],
            type1: ["序号", "资产编号", "资产名称", "状态", "管理IP", "保密级别", "品牌", "型号", "位置", "用途"],
            type2: ["序号", "资产编号", "资产名称", "状态", "软件名称", "软件版本", "运行设备", "服务端口", "用途"],
            type3: ["序号", "资产编号", "资产名称", "状态", "品牌", "型号", "保密级别", "用途"],
            type5: ["序号", "资产编号", "资产名称", "状态", "管理IP", "保密级别", "品牌", "型号", "位置", "用途"],
            type6: ["序号", "资产编号", "资产名称", "状态", "管理IP", "保密级别", "操作系统", "品牌", "型号", "用途"],
            type7: ["序号", "资产编号", "资产名称", "状态", "软件名称", "软件版本", "运行设备", "服务端口", "用途"],
            type8: ["序号", "资产编号", "资产名称", "状态", "保密级别", "用途"]
        },
        body: {
            type4: ["assetNO", "name", "status", "apManageIP", "apPlaceHost", "secrecyLevel", "apOperatingSystem", "apCpuNumber", "apMemory", "apSize", "usage"],
            type1: ["assetNO", "name", "status", "apManageIP", "secrecyLevel", "brand", "model", "region.fullName", "usage"],
            type2: ["assetNO", "name", "status", "software.name", "apVersion", "runOn.name", "apUsePorts", "usage"],
            type3: ["assetNO", "name", "status", "brand", "model", "secrecyLevel", "usage"],
            type5: ["assetNO", "name", "status", "apManageIP", "secrecyLevel", "brand", "model", "region.fullName", "usage"],
            type6: ["assetNO", "name", "status", "apManageIP", "secrecyLevel", "apOperatingSystem", "brand", "model", "usage"],
            type7: ["assetNO", "name", "status", "software.name", "apVersion", "runOn.name", "apUsePorts", "usage"],
            type8: ["assetNO", "name", "status", "secrecyLevel", "usage"],
        }
    },
    QueryString: function (val) {
        var uri = window.location.search;
        var re = new RegExp("" + val + "\=([^\&\?]*)", "ig");
        return ((uri.match(re)) ? (uri.match(re)[0].substr(val.length + 1)) : null);
    },
    appendTitle: function () {
        var type = Tools.QueryString("type");
        $(".con-part0>span").html("资产管理-" + Tools.data.title["type" + type])
    },
    appendHeader: function (type, callback) {
        var type = Tools.QueryString("type");
        var header = Tools.data.header;
        $(".table-th").empty().append((function () {
            var str = "";
            $.each(header["type" + type], function (index, item) {
                if (index == 0) {
                    str += '<div><i class="fa fa-bell-o"></i> ' + item + '</div>'
                } else {
                    str += "<div>" + item + "</div>"
                }
            })
            return str;
        })());
        return callback();
    },
    init: function () {
        var type = Tools.QueryString("type");
        Tools.appendTitle();
        Tools.appendHeader(type, function () {
            Tools.getData(1, iDisplayLength);
        })
    },
    getData: function (offset, pageSize) {
        var type = Tools.QueryString("type");
        var bodyData = Tools.data.body;
        // $.ajax({
        //     url: "../zcgl/getZcglListDateByType",
        //     data: {
        //         start: (offset - 1) * iDisplayLength,
        //         limit: pageSize,
        //         type: type
        //     },
        //     success: function (res) {
        //         var data = JSON.parse(res);
                var data  ={
                    "root": [
                        {
                            "apAccSupport": false,
                            "apBattery": 0,
                            "apBluetoothSupport": false,
                            "apCalicheRotateSpeed": 0,
                            "apColorBits": 0,
                            "apConcurrentConnections": 0,
                            "apCoreThread": 0,
                            "apDiskNumber": 0,
                            "apDiskParameters": 0,
                            "apDriverNumber": 0,
                            "apElectricAuxiliaryHeating": 0,
                            "apFlash": false,
                            "apGpsSupport": false,
                            "apGyroscopeSupport": false,
                            "apHorsepower": 0,
                            "apHybridDriveTechnology": false,
                            "apIsMute": false,
                            "apLanInterface": 0,
                            "apMacAddressTableCount": 0,
                            "apManageIP": "156.8.16.19",
                            "apMaxCopypages": 0,
                            "apNetworkCardNum": 0,
                            "apNfcSupport": false,
                            "apPageInNunber": 0,
                            "apPageOutNumber": 0,
                            "apPower": 0,
                            "apProcemaxCpuNumberssordigits": 0,
                            "apProcessorBit": 0,
                            "apProcessorFrequency": 0,
                            "apRAMVolume": 0,
                            "apROMVolume": 0,
                            "apRamNum": 0,
                            "apRamSlotNumber": 0,
                            "apRamSlotUsedNum": 0,
                            "apRfidSupport": false,
                            "apScreenShare": 0,
                            "apStandardCpuNumber": 0,
                            "apStorageCard": false,
                            "apSupportMBInterface": false,
                            "apTerminalNum": 0,
                            "apTmpSupport": false,
                            "apUsb": 0,
                            "apUserLimit": 0,
                            "apWanInterface": 0,
                            "apWifiSupport": false,
                            "assetNO": "Device0000000088",
                            "cabinetOccupyNum": 0,
                            "cabinetPosition": 0,
                            "cabinetUNumber": 0,
                            "category": {
                                "code": "cagt_2_network_device",
                                "createdOn": "2014-09-04 14:40:49",
                                "defultCodeRule": true,
                                "hidden": false,
                                "icon": "/cmdb/resources/images/blueSeries/catg_icon/img_36_36/network-device.png",
                                "id": "402881d6483f64c601483f64e31b0013",
                                "name": "网络设备",
                                "orderCode": "001",
                                "updatedOn": "2014-09-04 14:40:49",
                                "urlModelDefinition": "402881d6485ef50901485ef52ea40013"
                            },
                            "createdBy": "itsm",
                            "createdOn": "2019-08-28 17:35:21",
                            "id": "ff8080816cd14dca016cd79461e10077",
                            "influence": 0,
                            "locked": false,
                            "name": "流量镜像设备",
                            "secrecyLevel": "秘密",
                            "status": {
                                "code": "running",
                                "createdOn": "2014-09-10 17:46:35",
                                "id": "402881d6485ef50901485ef51ea40000",
                                "name": "运营中",
                                "removable": false,
                                "updatedOn": "2014-09-10 17:46:35"
                            },
                            "updatedBy": "itsm",
                            "updatedOn": "2019-08-28 17:35:21",
                            "usage": "流量镜像设备",
                            "xfn1": 0,
                            "xfn2": 0,
                            "xfn3": 0,
                            "xfn4": 0,
                            "xfn5": 0
                        },
                        {
                            "apAccSupport": false,
                            "apBattery": 0,
                            "apBluetoothSupport": false,
                            "apCalicheRotateSpeed": 0,
                            "apColorBits": 0,
                            "apConcurrentConnections": 0,
                            "apCoreThread": 0,
                            "apDiskNumber": 0,
                            "apDiskParameters": 0,
                            "apDriverNumber": 0,
                            "apElectricAuxiliaryHeating": 0,
                            "apFlash": false,
                            "apGpsSupport": false,
                            "apGyroscopeSupport": false,
                            "apHorsepower": 0,
                            "apHybridDriveTechnology": false,
                            "apIsMute": false,
                            "apLanInterface": 0,
                            "apMacAddressTableCount": 0,
                            "apManageIP": "156.8.30.9",
                            "apMaxCopypages": 0,
                            "apNetworkCardNum": 0,
                            "apNfcSupport": false,
                            "apPageInNunber": 0,
                            "apPageOutNumber": 0,
                            "apPower": 0,
                            "apProcemaxCpuNumberssordigits": 0,
                            "apProcessorBit": 0,
                            "apProcessorFrequency": 0,
                            "apRAMVolume": 0,
                            "apROMVolume": 0,
                            "apRamNum": 0,
                            "apRamSlotNumber": 0,
                            "apRamSlotUsedNum": 0,
                            "apRfidSupport": false,
                            "apScreenShare": 0,
                            "apStandardCpuNumber": 0,
                            "apStorageCard": false,
                            "apSupportMBInterface": false,
                            "apTerminalNum": 0,
                            "apTmpSupport": false,
                            "apUsb": 0,
                            "apUserLimit": 0,
                            "apWanInterface": 0,
                            "apWifiSupport": false,
                            "assetNO": "Device0000000098",
                            "cabinetOccupyNum": 0,
                            "cabinetPosition": 0,
                            "cabinetUNumber": 0,
                            "category": {
                                "code": "cagt_2_network_device",
                                "createdOn": "2014-09-04 14:40:49",
                                "defultCodeRule": true,
                                "hidden": false,
                                "icon": "/cmdb/resources/images/blueSeries/catg_icon/img_36_36/network-device.png",
                                "id": "402881d6483f64c601483f64e31b0013",
                                "name": "网络设备",
                                "orderCode": "001",
                                "updatedOn": "2014-09-04 14:40:49",
                                "urlModelDefinition": "402881d6485ef50901485ef52ea40013"
                            },
                            "createdBy": "itsm",
                            "createdOn": "2019-08-28 17:57:34",
                            "id": "ff8080816cd14dca016cd7a8b7b30092",
                            "influence": 0,
                            "locked": false,
                            "name": "汇聚交换机",
                            "region": {
                                "createdBy": "itsm",
                                "createdOn": "2019-06-04 11:16:18",
                                "description": "",
                                "fullName": "长春市",
                                "id": "402883f56b1c7988016b207ccf9801d8",
                                "name": "长春市",
                                "updatedBy": "itsm",
                                "updatedOn": "2019-06-04 11:16:18"
                            },
                            "secrecyLevel": "秘密",
                            "status": {
                                "code": "running",
                                "createdOn": "2014-09-10 17:46:35",
                                "id": "402881d6485ef50901485ef51ea40000",
                                "name": "运营中",
                                "removable": false,
                                "updatedOn": "2014-09-10 17:46:35"
                            },
                            "updatedBy": "itsm",
                            "updatedOn": "2019-08-28 17:57:34",
                            "usage": "汇聚交换机",
                            "xfn1": 0,
                            "xfn2": 0,
                            "xfn3": 0,
                            "xfn4": 0,
                            "xfn5": 0
                        },
                        {
                            "apAccSupport": false,
                            "apBattery": 0,
                            "apBluetoothSupport": false,
                            "apCalicheRotateSpeed": 0,
                            "apColorBits": 0,
                            "apConcurrentConnections": 0,
                            "apCoreThread": 0,
                            "apDiskNumber": 0,
                            "apDiskParameters": 0,
                            "apDriverNumber": 0,
                            "apElectricAuxiliaryHeating": 0,
                            "apFlash": false,
                            "apGpsSupport": false,
                            "apGyroscopeSupport": false,
                            "apHorsepower": 0,
                            "apHybridDriveTechnology": false,
                            "apIsMute": false,
                            "apLanInterface": 0,
                            "apMacAddressTableCount": 0,
                            "apManageIP": "156.8.183.1",
                            "apMaxCopypages": 0,
                            "apNetworkCardNum": 0,
                            "apNfcSupport": false,
                            "apPageInNunber": 0,
                            "apPageOutNumber": 0,
                            "apPower": 0,
                            "apProcemaxCpuNumberssordigits": 0,
                            "apProcessorBit": 0,
                            "apProcessorFrequency": 0,
                            "apRAMVolume": 0,
                            "apROMVolume": 0,
                            "apRamNum": 0,
                            "apRamSlotNumber": 0,
                            "apRamSlotUsedNum": 0,
                            "apRfidSupport": false,
                            "apScreenShare": 0,
                            "apStandardCpuNumber": 0,
                            "apStorageCard": false,
                            "apSupportMBInterface": false,
                            "apTerminalNum": 0,
                            "apTmpSupport": false,
                            "apUsb": 0,
                            "apUserLimit": 0,
                            "apWanInterface": 0,
                            "apWifiSupport": false,
                            "assetNO": "Device0000000099",
                            "building": {
                                "createdBy": "itsm",
                                "createdOn": "2019-06-04 11:17:37",
                                "description": "",
                                "fullName": "长春市 纪委大楼二栋",
                                "gc": "",
                                "id": "402883f56b1c7988016b207e030901d9",
                                "name": "纪委大楼二栋",
                                "updatedBy": "itsm",
                                "updatedOn": "2019-06-04 11:17:37"
                            },
                            "cabinetOccupyNum": 0,
                            "cabinetPosition": 0,
                            "cabinetUNumber": 0,
                            "category": {
                                "code": "cagt_2_network_device",
                                "createdOn": "2014-09-04 14:40:49",
                                "defultCodeRule": true,
                                "hidden": false,
                                "icon": "/cmdb/resources/images/blueSeries/catg_icon/img_36_36/network-device.png",
                                "id": "402881d6483f64c601483f64e31b0013",
                                "name": "网络设备",
                                "orderCode": "001",
                                "updatedOn": "2014-09-04 14:40:49",
                                "urlModelDefinition": "402881d6485ef50901485ef52ea40013"
                            },
                            "createdBy": "itsm",
                            "createdOn": "2019-08-28 17:58:29",
                            "floor": {
                                "createdBy": "itsm",
                                "createdOn": "2019-06-04 11:19:54",
                                "description": "",
                                "floorNO": "SILOU",
                                "fullName": "长春市 纪委大楼二栋 四楼",
                                "id": "402883f56b1c7988016b2080192c01dd",
                                "name": "四楼",
                                "updatedBy": "itsm",
                                "updatedOn": "2019-06-04 11:19:54"
                            },
                            "id": "ff8080816cd14dca016cd7a990a50094",
                            "influence": 0,
                            "locked": false,
                            "name": "万兆交换机",
                            "region": {
                                "createdBy": "itsm",
                                "createdOn": "2019-06-04 11:16:18",
                                "description": "",
                                "fullName": "长春市",
                                "id": "402883f56b1c7988016b207ccf9801d8",
                                "name": "长春市",
                                "updatedBy": "itsm",
                                "updatedOn": "2019-06-04 11:16:18"
                            },
                            "secrecyLevel": "内部",
                            "status": {
                                "code": "running",
                                "createdOn": "2014-09-10 17:46:35",
                                "id": "402881d6485ef50901485ef51ea40000",
                                "name": "运营中",
                                "removable": false,
                                "updatedOn": "2014-09-10 17:46:35"
                            },
                            "updatedBy": "itsm",
                            "updatedOn": "2019-08-28 17:58:29",
                            "usage": "万兆交换机",
                            "xfn1": 0,
                            "xfn2": 0,
                            "xfn3": 0,
                            "xfn4": 0,
                            "xfn5": 0
                        },
                        {
                            "apAccSupport": false,
                            "apBattery": 0,
                            "apBluetoothSupport": false,
                            "apCalicheRotateSpeed": 0,
                            "apColorBits": 0,
                            "apConcurrentConnections": 0,
                            "apCoreThread": 0,
                            "apDiskNumber": 0,
                            "apDiskParameters": 0,
                            "apDriverNumber": 0,
                            "apElectricAuxiliaryHeating": 0,
                            "apFlash": false,
                            "apGpsSupport": false,
                            "apGyroscopeSupport": false,
                            "apHorsepower": 0,
                            "apHybridDriveTechnology": false,
                            "apIsMute": false,
                            "apLanInterface": 0,
                            "apMacAddressTableCount": 0,
                            "apManageIP": "156.8.183.10",
                            "apMaxCopypages": 0,
                            "apNetworkCardNum": 0,
                            "apNfcSupport": false,
                            "apPageInNunber": 0,
                            "apPageOutNumber": 0,
                            "apPower": 0,
                            "apProcemaxCpuNumberssordigits": 0,
                            "apProcessorBit": 0,
                            "apProcessorFrequency": 0,
                            "apRAMVolume": 0,
                            "apROMVolume": 0,
                            "apRamNum": 0,
                            "apRamSlotNumber": 0,
                            "apRamSlotUsedNum": 0,
                            "apRfidSupport": false,
                            "apScreenShare": 0,
                            "apStandardCpuNumber": 0,
                            "apStorageCard": false,
                            "apSupportMBInterface": false,
                            "apTerminalNum": 0,
                            "apTmpSupport": false,
                            "apUsb": 0,
                            "apUserLimit": 0,
                            "apWanInterface": 0,
                            "apWifiSupport": false,
                            "assetNO": "Device0000000100",
                            "building": {
                                "createdBy": "itsm",
                                "createdOn": "2019-06-04 11:17:37",
                                "description": "",
                                "fullName": "长春市 纪委大楼二栋",
                                "gc": "",
                                "id": "402883f56b1c7988016b207e030901d9",
                                "name": "纪委大楼二栋",
                                "updatedBy": "itsm",
                                "updatedOn": "2019-06-04 11:17:37"
                            },
                            "cabinetOccupyNum": 0,
                            "cabinetPosition": 0,
                            "cabinetUNumber": 0,
                            "category": {
                                "code": "cagt_2_network_device",
                                "createdOn": "2014-09-04 14:40:49",
                                "defultCodeRule": true,
                                "hidden": false,
                                "icon": "/cmdb/resources/images/blueSeries/catg_icon/img_36_36/network-device.png",
                                "id": "402881d6483f64c601483f64e31b0013",
                                "name": "网络设备",
                                "orderCode": "001",
                                "updatedOn": "2014-09-04 14:40:49",
                                "urlModelDefinition": "402881d6485ef50901485ef52ea40013"
                            },
                            "createdBy": "itsm",
                            "createdOn": "2019-08-28 17:58:58",
                            "floor": {
                                "createdBy": "itsm",
                                "createdOn": "2019-06-04 11:19:25",
                                "description": "",
                                "floorNO": "SL",
                                "fullName": "长春市 纪委大楼二栋 三楼",
                                "id": "402883f56b1c7988016b207fa74301dc",
                                "name": "三楼",
                                "updatedBy": "itsm",
                                "updatedOn": "2019-06-04 11:19:25"
                            },
                            "id": "ff8080816cd14dca016cd7a9fed30096",
                            "influence": 0,
                            "locked": false,
                            "name": "三层交换机",
                            "region": {
                                "createdBy": "itsm",
                                "createdOn": "2019-06-04 11:16:18",
                                "description": "",
                                "fullName": "长春市",
                                "id": "402883f56b1c7988016b207ccf9801d8",
                                "name": "长春市",
                                "updatedBy": "itsm",
                                "updatedOn": "2019-06-04 11:16:18"
                            },
                            "secrecyLevel": "内部",
                            "status": {
                                "code": "running",
                                "createdOn": "2014-09-10 17:46:35",
                                "id": "402881d6485ef50901485ef51ea40000",
                                "name": "运营中",
                                "removable": false,
                                "updatedOn": "2014-09-10 17:46:35"
                            },
                            "updatedBy": "itsm",
                            "updatedOn": "2019-08-28 17:58:58",
                            "usage": "三层交换机",
                            "xfn1": 0,
                            "xfn2": 0,
                            "xfn3": 0,
                            "xfn4": 0,
                            "xfn5": 0
                        },
                        {
                            "apAccSupport": false,
                            "apBattery": 0,
                            "apBluetoothSupport": false,
                            "apCalicheRotateSpeed": 0,
                            "apColorBits": 0,
                            "apConcurrentConnections": 0,
                            "apCoreThread": 0,
                            "apDiskNumber": 0,
                            "apDiskParameters": 0,
                            "apDriverNumber": 0,
                            "apElectricAuxiliaryHeating": 0,
                            "apFlash": false,
                            "apGpsSupport": false,
                            "apGyroscopeSupport": false,
                            "apHorsepower": 0,
                            "apHybridDriveTechnology": false,
                            "apIsMute": false,
                            "apLanInterface": 0,
                            "apMacAddressTableCount": 0,
                            "apManageIP": "156.8.12.10",
                            "apMaxCopypages": 0,
                            "apNetworkCardNum": 0,
                            "apNfcSupport": false,
                            "apPageInNunber": 0,
                            "apPageOutNumber": 0,
                            "apPower": 0,
                            "apProcemaxCpuNumberssordigits": 0,
                            "apProcessorBit": 0,
                            "apProcessorFrequency": 0,
                            "apRAMVolume": 0,
                            "apROMVolume": 0,
                            "apRamNum": 0,
                            "apRamSlotNumber": 0,
                            "apRamSlotUsedNum": 0,
                            "apRfidSupport": false,
                            "apScreenShare": 0,
                            "apStandardCpuNumber": 0,
                            "apStorageCard": false,
                            "apSupportMBInterface": false,
                            "apTerminalNum": 0,
                            "apTmpSupport": false,
                            "apUsb": 0,
                            "apUserLimit": 0,
                            "apWanInterface": 0,
                            "apWifiSupport": false,
                            "assetNO": "Device0000000101",
                            "building": {
                                "createdBy": "itsm",
                                "createdOn": "2019-06-04 11:17:37",
                                "description": "",
                                "fullName": "长春市 纪委大楼二栋",
                                "gc": "",
                                "id": "402883f56b1c7988016b207e030901d9",
                                "name": "纪委大楼二栋",
                                "updatedBy": "itsm",
                                "updatedOn": "2019-06-04 11:17:37"
                            },
                            "cabinetOccupyNum": 0,
                            "cabinetPosition": 0,
                            "cabinetUNumber": 0,
                            "category": {
                                "code": "cagt_2_network_device",
                                "createdOn": "2014-09-04 14:40:49",
                                "defultCodeRule": true,
                                "hidden": false,
                                "icon": "/cmdb/resources/images/blueSeries/catg_icon/img_36_36/network-device.png",
                                "id": "402881d6483f64c601483f64e31b0013",
                                "name": "网络设备",
                                "orderCode": "001",
                                "updatedOn": "2014-09-04 14:40:49",
                                "urlModelDefinition": "402881d6485ef50901485ef52ea40013"
                            },
                            "createdBy": "itsm",
                            "createdOn": "2019-08-28 17:59:36",
                            "floor": {
                                "createdBy": "itsm",
                                "createdOn": "2019-06-04 11:19:25",
                                "description": "",
                                "floorNO": "SL",
                                "fullName": "长春市 纪委大楼二栋 三楼",
                                "id": "402883f56b1c7988016b207fa74301dc",
                                "name": "三楼",
                                "updatedBy": "itsm",
                                "updatedOn": "2019-06-04 11:19:25"
                            },
                            "id": "ff8080816cd14dca016cd7aa949c0098",
                            "influence": 0,
                            "locked": false,
                            "name": "虚拟化管理千兆48口交换机",
                            "region": {
                                "createdBy": "itsm",
                                "createdOn": "2019-06-04 11:16:18",
                                "description": "",
                                "fullName": "长春市",
                                "id": "402883f56b1c7988016b207ccf9801d8",
                                "name": "长春市",
                                "updatedBy": "itsm",
                                "updatedOn": "2019-06-04 11:16:18"
                            },
                            "secrecyLevel": "机密",
                            "status": {
                                "code": "running",
                                "createdOn": "2014-09-10 17:46:35",
                                "id": "402881d6485ef50901485ef51ea40000",
                                "name": "运营中",
                                "removable": false,
                                "updatedOn": "2014-09-10 17:46:35"
                            },
                            "updatedBy": "itsm",
                            "updatedOn": "2019-08-28 17:59:36",
                            "usage": "虚拟化管理千兆48口交换机",
                            "xfn1": 0,
                            "xfn2": 0,
                            "xfn3": 0,
                            "xfn4": 0,
                            "xfn5": 0
                        }
                    ],
                    "success": true,
                    "total": 5
                }
                if ($("#PageSize").val() == 0) {
                    $("#PageSize").val(pageSize);//每页显示数量
                    $("#countindex").val(Math.ceil(data.total / iDisplayLength) || 1);//总页数
                    pageEvent();
                }
                $(".table-ul>li:not(.table-th)").remove();

                $.each(data.root, function (index_, item_) {
                    // var str = `<li class="animated flipInX tr-status-${item_.urgency.starNumber}">
                    var str = `<li class="animated flipInX">
                        <div class="fontNumber">${(offset - 1) * iDisplayLength + index_ + 1}</div>`;
                    $.each(bodyData["type" + type], function (index, item) {
                        var point = item.indexOf(".");
                        if (point > 0) {
                            var key_ = item.split(".");
                            try {
                                str += `<div class="fontNumber">${item_[key_[0]]?item_[key_[0]][key_[1]] : "无"}</div>`
                            } catch (e) {
                                str += `<div class="fontNumber">无</div>`
                            }
                        } else {
                            str += `<div class="fontNumber">${item_[item] || "无"}</div>`
                        }
                    })
                    str += `</li>`;
                    $(".table-ul").append(str);
                })

            // }
        // })
    },
    goback: function () {
        $(window.parent.document.getElementById("part2ZCGL-modal")).hide().empty()
    }
}

// 初始化分页控件
function pageEvent() {
    $.jqPaginator('#pagination', {
        totalPages: parseInt($("#countindex").val()),
        visiblePages: parseInt($("#visiblePages").val()),
        currentPage: 1,
        first: '<li class="first"><a href="javascript:;">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:;"><i class="arrow arrow2"></i>上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">	下一页<i class="arrow arrow3"></i></a></li>',
        last: '<li class="last"><a href="javascript:;">尾页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            if (type == "change") {
                Tools.getData(num, iDisplayLength);
            }
        }
    });

}

$(function () {
    Tools.init();
})