
package com.example.webserverinterfacenew;

import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.xml.ws.Service;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceException;
import javax.xml.ws.WebServiceFeature;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.9-b130926.1035
 * Generated source version: 2.2
 * 
 */
@WebServiceClient(name = "GetChartsWebserviceImpService", targetNamespace = "http://spring.service.getChart.todoo.kmss.landray.com/", wsdlLocation = "http://156.8.11.13:6888/sys/webservice/getChartsWebservice?wsdl")
public class GetChartsWebserviceImpService
    extends Service
{

    private final static URL GETCHARTSWEBSERVICEIMPSERVICE_WSDL_LOCATION;
    private final static WebServiceException GETCHARTSWEBSERVICEIMPSERVICE_EXCEPTION;
    private final static QName GETCHARTSWEBSERVICEIMPSERVICE_QNAME = new QName("http://spring.service.getChart.todoo.kmss.landray.com/", "GetChartsWebserviceImpService");

    static {
        URL url = null;
        WebServiceException e = null;
        try {
            url = new URL("http://156.8.11.13:6888/sys/webservice/getChartsWebservice?wsdl");
        } catch (MalformedURLException ex) {
            e = new WebServiceException(ex);
        }
        GETCHARTSWEBSERVICEIMPSERVICE_WSDL_LOCATION = url;
        GETCHARTSWEBSERVICEIMPSERVICE_EXCEPTION = e;
    }

    public GetChartsWebserviceImpService() {
        super(__getWsdlLocation(), GETCHARTSWEBSERVICEIMPSERVICE_QNAME);
    }

    public GetChartsWebserviceImpService(WebServiceFeature... features) {
        super(__getWsdlLocation(), GETCHARTSWEBSERVICEIMPSERVICE_QNAME, features);
    }

    public GetChartsWebserviceImpService(URL wsdlLocation) {
        super(wsdlLocation, GETCHARTSWEBSERVICEIMPSERVICE_QNAME);
    }

    public GetChartsWebserviceImpService(URL wsdlLocation, WebServiceFeature... features) {
        super(wsdlLocation, GETCHARTSWEBSERVICEIMPSERVICE_QNAME, features);
    }

    public GetChartsWebserviceImpService(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public GetChartsWebserviceImpService(URL wsdlLocation, QName serviceName, WebServiceFeature... features) {
        super(wsdlLocation, serviceName, features);
    }

    /**
     * 
     * @return
     *     returns IGetChartWebservice
     */
    @WebEndpoint(name = "GetChartsWebserviceImpPort")
    public IGetChartWebservice getGetChartsWebserviceImpPort() {
        return super.getPort(new QName("http://spring.service.getChart.todoo.kmss.landray.com/", "GetChartsWebserviceImpPort"), IGetChartWebservice.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns IGetChartWebservice
     */
    @WebEndpoint(name = "GetChartsWebserviceImpPort")
    public IGetChartWebservice getGetChartsWebserviceImpPort(WebServiceFeature... features) {
        return super.getPort(new QName("http://spring.service.getChart.todoo.kmss.landray.com/", "GetChartsWebserviceImpPort"), IGetChartWebservice.class, features);
    }

    private static URL __getWsdlLocation() {
        if (GETCHARTSWEBSERVICEIMPSERVICE_EXCEPTION!= null) {
            throw GETCHARTSWEBSERVICEIMPSERVICE_EXCEPTION;
        }
        return GETCHARTSWEBSERVICEIMPSERVICE_WSDL_LOCATION;
    }

}
