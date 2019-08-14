
package com.example.webserverinterface;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.example.webserverinterface package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _GetMeetingInfoResponse_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getMeetingInfoResponse");
    private final static QName _GetSubInfo_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getSubInfo");
    private final static QName _GetOnlineNumResponse_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getOnlineNumResponse");
    private final static QName _GetPartyInfoResponse_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getPartyInfoResponse");
    private final static QName _GetDubanInfo_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getDubanInfo");
    private final static QName _GetMeetingInfo_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getMeetingInfo");
    private final static QName _GetPartyInfo_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getPartyInfo");
    private final static QName _GetDubanInfoResponse_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getDubanInfoResponse");
    private final static QName _GetOnlineNum_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getOnlineNum");
    private final static QName _GetOrSendFileResponse_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getOrSendFileResponse");
    private final static QName _GetSubInfoResponse_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getSubInfoResponse");
    private final static QName _GetOrSendFile_QNAME = new QName("http://service.getChart.todoo.kmss.landray.com/", "getOrSendFile");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.example.webserverinterface
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link GetSubInfo }
     * 
     */
    public GetSubInfo createGetSubInfo() {
        return new GetSubInfo();
    }

    /**
     * Create an instance of {@link GetMeetingInfoResponse }
     * 
     */
    public GetMeetingInfoResponse createGetMeetingInfoResponse() {
        return new GetMeetingInfoResponse();
    }

    /**
     * Create an instance of {@link GetPartyInfoResponse }
     * 
     */
    public GetPartyInfoResponse createGetPartyInfoResponse() {
        return new GetPartyInfoResponse();
    }

    /**
     * Create an instance of {@link GetOnlineNumResponse }
     * 
     */
    public GetOnlineNumResponse createGetOnlineNumResponse() {
        return new GetOnlineNumResponse();
    }

    /**
     * Create an instance of {@link GetOnlineNum }
     * 
     */
    public GetOnlineNum createGetOnlineNum() {
        return new GetOnlineNum();
    }

    /**
     * Create an instance of {@link GetOrSendFileResponse }
     * 
     */
    public GetOrSendFileResponse createGetOrSendFileResponse() {
        return new GetOrSendFileResponse();
    }

    /**
     * Create an instance of {@link GetDubanInfo }
     * 
     */
    public GetDubanInfo createGetDubanInfo() {
        return new GetDubanInfo();
    }

    /**
     * Create an instance of {@link GetMeetingInfo }
     * 
     */
    public GetMeetingInfo createGetMeetingInfo() {
        return new GetMeetingInfo();
    }

    /**
     * Create an instance of {@link GetPartyInfo }
     * 
     */
    public GetPartyInfo createGetPartyInfo() {
        return new GetPartyInfo();
    }

    /**
     * Create an instance of {@link GetDubanInfoResponse }
     * 
     */
    public GetDubanInfoResponse createGetDubanInfoResponse() {
        return new GetDubanInfoResponse();
    }

    /**
     * Create an instance of {@link GetSubInfoResponse }
     * 
     */
    public GetSubInfoResponse createGetSubInfoResponse() {
        return new GetSubInfoResponse();
    }

    /**
     * Create an instance of {@link GetOrSendFile }
     * 
     */
    public GetOrSendFile createGetOrSendFile() {
        return new GetOrSendFile();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetMeetingInfoResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getMeetingInfoResponse")
    public JAXBElement<GetMeetingInfoResponse> createGetMeetingInfoResponse(GetMeetingInfoResponse value) {
        return new JAXBElement<GetMeetingInfoResponse>(_GetMeetingInfoResponse_QNAME, GetMeetingInfoResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSubInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getSubInfo")
    public JAXBElement<GetSubInfo> createGetSubInfo(GetSubInfo value) {
        return new JAXBElement<GetSubInfo>(_GetSubInfo_QNAME, GetSubInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetOnlineNumResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getOnlineNumResponse")
    public JAXBElement<GetOnlineNumResponse> createGetOnlineNumResponse(GetOnlineNumResponse value) {
        return new JAXBElement<GetOnlineNumResponse>(_GetOnlineNumResponse_QNAME, GetOnlineNumResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetPartyInfoResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getPartyInfoResponse")
    public JAXBElement<GetPartyInfoResponse> createGetPartyInfoResponse(GetPartyInfoResponse value) {
        return new JAXBElement<GetPartyInfoResponse>(_GetPartyInfoResponse_QNAME, GetPartyInfoResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDubanInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getDubanInfo")
    public JAXBElement<GetDubanInfo> createGetDubanInfo(GetDubanInfo value) {
        return new JAXBElement<GetDubanInfo>(_GetDubanInfo_QNAME, GetDubanInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetMeetingInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getMeetingInfo")
    public JAXBElement<GetMeetingInfo> createGetMeetingInfo(GetMeetingInfo value) {
        return new JAXBElement<GetMeetingInfo>(_GetMeetingInfo_QNAME, GetMeetingInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetPartyInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getPartyInfo")
    public JAXBElement<GetPartyInfo> createGetPartyInfo(GetPartyInfo value) {
        return new JAXBElement<GetPartyInfo>(_GetPartyInfo_QNAME, GetPartyInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDubanInfoResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getDubanInfoResponse")
    public JAXBElement<GetDubanInfoResponse> createGetDubanInfoResponse(GetDubanInfoResponse value) {
        return new JAXBElement<GetDubanInfoResponse>(_GetDubanInfoResponse_QNAME, GetDubanInfoResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetOnlineNum }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getOnlineNum")
    public JAXBElement<GetOnlineNum> createGetOnlineNum(GetOnlineNum value) {
        return new JAXBElement<GetOnlineNum>(_GetOnlineNum_QNAME, GetOnlineNum.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetOrSendFileResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getOrSendFileResponse")
    public JAXBElement<GetOrSendFileResponse> createGetOrSendFileResponse(GetOrSendFileResponse value) {
        return new JAXBElement<GetOrSendFileResponse>(_GetOrSendFileResponse_QNAME, GetOrSendFileResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSubInfoResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getSubInfoResponse")
    public JAXBElement<GetSubInfoResponse> createGetSubInfoResponse(GetSubInfoResponse value) {
        return new JAXBElement<GetSubInfoResponse>(_GetSubInfoResponse_QNAME, GetSubInfoResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetOrSendFile }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://service.getChart.todoo.kmss.landray.com/", name = "getOrSendFile")
    public JAXBElement<GetOrSendFile> createGetOrSendFile(GetOrSendFile value) {
        return new JAXBElement<GetOrSendFile>(_GetOrSendFile_QNAME, GetOrSendFile.class, null, value);
    }

}
