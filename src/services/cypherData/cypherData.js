import axios from "axios";

let dataToObject;
export const data = {
    MerchantID:"8878254",
    User:"prueba8878254",
    Password:"C0M53him$%",
    Mode:"PRD",
    TerminalID:"88782541",
    CustomerRef1:"",
    CustomerRef2:"",
    CustomerRef3:"",
    CustomerRef4:"",
    CustomerRef5:"",
    MerchantName:"HIMFG CURSOS",
    MerchantCity:"CIUDAD DE MEXICO CDMX",
    Language:"ES",
  };
  
  export const cerKey = `
  MIIGVjCCBT6gAwIBAgITFwABIQr95dc29zzr2wABAAEhCjANBgkqhkiG9w0BAQsF
  ADB5MQswCQYDVQQGEwJNWDEZMBcGCgmSJomT8ixkARkWCWdmYmFub3J0ZTEeMBwG
  A1UEChMVU2VndXJpZGFkIGluZm9ybWF0aWNhMS8wLQYDVQQDEyZHcnVwbyBGaW5h
  bmNpZXJvIEJhbm9ydGUgQ0EgRW50ZXJwcmlzZTAeFw0yNDAzMDQyMDM2NTRaFw0y
  NTAzMDQyMDM2NTRaMIGoMQswCQYDVQQGEwJNWDELMAkGA1UECBMCREYxDzANBgNV
  BAcTBk1leGljbzErMCkGA1UEChMiR3J1cG8gRmluYW5jaWVybyBCYW5vcnRlIFNB
  QiBkZSBDVjEkMCIGA1UECxMbU2VndXJpZGFkIGRlIGxhIEluZm9ybWFjaW9uMSgw
  JgYDVQQDEx9tdWx0aWNvYnJvc2tleS51bml4LmJhbm9ydGUuY29tMIIBIjANBgkq
  hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0dKvz3+1Y94EvZkhd+2xccYMDNdM7gfl
  J5OCknAJn8Qh8wnSHxNtcNWBvAcrzu1WUIxrWYKT4hKfutnNGSb5TFdWpkSkp1/G
  fmAvx2UoRSVx/HtZBQX6P0BDEsry1y8lYxjPAUAyPgxY4khOmQeyTYCTJGK7Zg0z
  cHVao3CkjuUaZ/AB3L0jUQBr4R2h7P5zea4NxvT445sf8bmcFZYmefjdwHR05PtS
  vV/rV5+KzWJbrRnEPeNRuderuKFgpPs2+tmvxgTlISK5wqa5bZ0N79uO73qz+lKw
  9qUQq0jeb8RRN3mozPbMpliFeXu87B3IIQaEZOErwl7zIGmmEN0BxwIDAQABo4IC
  pTCCAqEwFAYDVR0RBA0wC4IJbG54c2lzYTNwMB0GA1UdDgQWBBQJifjmRJ3yk/mt
  W0ZCcsMX43zTpTAfBgNVHSMEGDAWgBTQBPbPr59ruX3bXiA0YK0zB6UM0zCB7QYD
  VR0fBIHlMIHiMIHfoIHcoIHZhoHWbGRhcDovLy9DTj1HcnVwbyUyMEZpbmFuY2ll
  cm8lMjBCYW5vcnRlJTIwQ0ElMjBFbnRlcnByaXNlLENOPUNBLUJBTk9SVEUtUkEs
  Q049Q0RQLENOPVB1YmxpYyUyMEtleSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENO
  PUNvbmZpZ3VyYXRpb24sREM9Z2ZiYW5vcnRlP2NlcnRpZmljYXRlUmV2b2NhdGlv
  bkxpc3Q/YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Qb2ludDCB2wYI
  KwYBBQUHAQEEgc4wgcswgcgGCCsGAQUFBzAChoG7bGRhcDovLy9DTj1HcnVwbyUy
  MEZpbmFuY2llcm8lMjBCYW5vcnRlJTIwQ0ElMjBFbnRlcnByaXNlLENOPUFJQSxD
  Tj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25maWd1
  cmF0aW9uLERDPWdmYmFub3J0ZT9jQUNlcnRpZmljYXRlP2Jhc2U/b2JqZWN0Q2xh
  c3M9Y2VydGlmaWNhdGlvbkF1dGhvcml0eTALBgNVHQ8EBAMCBaAwPAYJKwYBBAGC
  NxUHBC8wLQYlKwYBBAGCNxUIg+v5BoK1j0eNkROCp58GguHddCKCxphfgtj9DwIB
  ZAIBDzATBgNVHSUEDDAKBggrBgEFBQcDATAbBgkrBgEEAYI3FQoEDjAMMAoGCCsG
  AQUFBwMBMA0GCSqGSIb3DQEBCwUAA4IBAQAPlZ6fN/Hq5EK3PTDAqMDQdYltTTPA
  Z3Ar3OdYCgTDfITwL7FbdnCR4cy2O8ZE9LqjZ/1ZbO1csWaLHDAwf2lXsfdOGRrP
  9minylhSAS8A1P/eLelAhJoQ86wqQA55yzNb5EEX82F8zYjNwOYpjXVojw8FB8uo
  GtAf9etNe7Xg8G8omKS9+HXFdvpVsAalRwVwAv4Gz0YWf7j6qEfnp6sxChRy1p0f
  HOy6X/HdoNInKp2c3fS9GB60seJdN1lTYnQredpTONgyWI2Jmj2Dvm0J1naqELWr
  R0kU3Vi/bm4o3QHjXDJFWesJ+YD8i6FNsqZmF1jI/0do07qIIoBHM4li
  `
async function cypherData(p, key) {
    try {
        const paramsE = {
            merchantId: "8878254",
            name: "prueba8878254",
            password: "C0M53him$%",
            mode: "PRD",
            terminalId: "88782541",
            amount:'1.00',
            controlNumber:'123456',
            customerRef1: "",
            customerRef2: "",
            customerRef3: "",
            customerRef4: "",
            customerRef5: "",
            merchantName: "HIMFG CURSOS",
            merchantCity: "CIUDAD DE MEXICO CDMX",
            language: "ES",
        };

        const { data: ret } = await axios.post(
            "https://cemesatelcyper-001-site1.mtempurl.com/aes/cifradoconllave",
            {
                base64: window.btoa(JSON.stringify(paramsE)),
                pubKeyStrCert: cerKey
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (ret.code === "200") {
            dataToObject = ret
            localStorage.setItem("cyperData", JSON.stringify(ret.data[0]));
            console.log(dataToObject)
            return ret.data[0];
        } else {
            throw new Error(`Código de error: ${ret.code}`);
        }
    } catch (error) {
        console.error("Error en cypherData:", error.response?.data || error.message);
        return null;
    }
}
const getCypherData = async (data) => {
    try {
        const resp = await axios.post(
            'https://cemesatelcyper-001-site1.mtempurl.com/aes/decrypt',
            data
        )
        console.log(resp)
        return resp.data
    } catch (error) {
        console.log('error')
    }
}
const startPayment = async() => {
    if (Payment) {
        Payment.setEnv("pro");
        let xOBJ;
        xOBJ = await cypherData();
        Payment.startPayment({
            Params: xOBJ,
            onClosed: function (res) {
                console.log('closed',res);
            },
            onError: function (res) {
                console.log('error', res);
            },
            onSuccess: async function (res) {
                console.log('success', res)
            },
            onCancel: function (res) {
                console.log('cancel', res)
            },
        });
    }
}
export { cypherData, getCypherData, startPayment };