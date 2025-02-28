import axios from "axios"
import { addPayment } from "../addPayment/addPayment"

let dataToObject;
export const data = {
    merchantId: "8878254",
    name: "prueba8878254",
    password: "C0M53him$%",
    mode: "AUT",
    terminalId: "88782541",
    customerRef1: "",
    customerRef2: "",
    customerRef3: "",
    customerRef4: "",
    customerRef5: "",
    merchantName: "HIMFG CURSOS",
    merchantCity: "CIUDAD DE MEXICO CDMX",
    lang: "ES",
};

export const cerKey = `
  MIIGdDCCBVygAwIBAgITFwABTnQA5m6Udb1vlQABAAFOdDANBgkqhkiG9w0BAQsF
ADB5MQswCQYDVQQGEwJNWDEZMBcGCgmSJomT8ixkARkWCWdmYmFub3J0ZTEeMBwG
A1UEChMVU2VndXJpZGFkIGluZm9ybWF0aWNhMS8wLQYDVQQDEyZHcnVwbyBGaW5h
bmNpZXJvIEJhbm9ydGUgQ0EgRW50ZXJwcmlzZTAeFw0yNTAyMjEyMDAwMzVaFw0y
NjAyMjEyMDAwMzVaMIGoMQswCQYDVQQGEwJNWDELMAkGA1UECBMCREYxDzANBgNV
BAcTBk1leGljbzErMCkGA1UEChMiR3J1cG8gRmluYW5jaWVybyBCYW5vcnRlIFNB
QiBkZSBDVjEkMCIGA1UECxMbU2VndXJpZGFkIGRlIGxhIEluZm9ybWFjaW9uMSgw
JgYDVQQDEx9tdWx0aWNvYnJvc2tleS51bml4LmJhbm9ydGUuY29tMIIBIjANBgkq
hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvp69wp3Z6ZXCHS+OQ2k8H26dWwuF/cSv
f37YT7NYfz4YvvXeahNv0CCStL5tATSoYj8MDKzNbwidXq/7e6JQpV1bcZjYXcjL
qli0GrOaJ00wUdR3zFS5F85Ks7ycTW6wNl/n7X8QXFVAh+HJyO7yrKdopcPyNLfJ
xBeXlvvuGfAKLJ7mCDdPN2UROg/35yLKil+VMB8OgF/KXEajmR0a+FiEe96+AkW3
oWMslb9fXm8+Kc4IqXKTZQg52CHPlbSnY8vaBqZd0sH5W60NILFFXgNFXsQAHhUt
njvcL+MY6NOHGeRYyrafP7Vwoog2kQiIUZafH/D1dWmB0r9qCv3VkQIDAQABo4IC
wzCCAr8wMgYDVR0RBCswKYIKbG54c2lzYTAxcIIbbG54c2lzYTAxcC51bml4LmJh
bm9ydGUuY29tMB0GA1UdDgQWBBR3lYj1Ic4B/MjmXVpM+fSAo3YxhTAfBgNVHSME
GDAWgBTQBPbPr59ruX3bXiA0YK0zB6UM0zCB7QYDVR0fBIHlMIHiMIHfoIHcoIHZ
hoHWbGRhcDovLy9DTj1HcnVwbyUyMEZpbmFuY2llcm8lMjBCYW5vcnRlJTIwQ0El
MjBFbnRlcnByaXNlLENOPUNBLUJBTk9SVEUtUkEsQ049Q0RQLENOPVB1YmxpYyUy
MEtleSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZpZ3VyYXRpb24sREM9
Z2ZiYW5vcnRlP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RD
bGFzcz1jUkxEaXN0cmlidXRpb25Qb2ludDCB2wYIKwYBBQUHAQEEgc4wgcswgcgG
CCsGAQUFBzAChoG7bGRhcDovLy9DTj1HcnVwbyUyMEZpbmFuY2llcm8lMjBCYW5v
cnRlJTIwQ0ElMjBFbnRlcnByaXNlLENOPUFJQSxDTj1QdWJsaWMlMjBLZXklMjBT
ZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9uLERDPWdmYmFub3J0
ZT9jQUNlcnRpZmljYXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlvbkF1
dGhvcml0eTALBgNVHQ8EBAMCBaAwPAYJKwYBBAGCNxUHBC8wLQYlKwYBBAGCNxUI
g+v5BoK1j0eNkROCp58GguHddCKCxphfgtj9DwIBZAIBEjATBgNVHSUEDDAKBggr
BgEFBQcDATAbBgkrBgEEAYI3FQoEDjAMMAoGCCsGAQUFBwMBMA0GCSqGSIb3DQEB
CwUAA4IBAQBicj3sAYJZTkjNo+HcqhPGDSA8vJ3rTEvDDqcaNiWlfPFaXLNBxfk2
aKuV6Ibf1nSE9lfrpqVz+RwKCrtc4jXx9lO6BkgAuG7H2h6Tg53TbYPUJnr5ynwi
jRlOacsJFvj5c6MLoM0Jrdw9ozd8UVjbqHTWo9iClPOGm9GX3FSc21bUWkSlp/Re
MeWXKhMhCtKdWPqQGYIW3skpUYzhgGTDdEaUvXFYK79Pud7mxS1761P1qt7s1Axo
61dvEM9gwtPuqcARkrwMroAqUhPmda71sndN3Z1CAh1khviyowwA2dZdxdT8ZqZy
01+dEnuNx6BtEq8aht+M2u01BOXiqj1U
  `
export const reference = (id) => {
    const baseString = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let random = `HIMFGCURSOS${id}`;
    for (let i = 0; i < 10; i++) {
        random += baseString.charAt(Math.random() * baseString.length);
    }
    return random;
}

async function cypherData({ amount, controlNumber }) {
    try {
        const { data: ret } = await axios.post(
            "https://cemesatelcyper-001-site1.mtempurl.com/aes/cifradoconllave",
            {
                base64: window.btoa(JSON.stringify({
                    ...data,
                    amount,
                    controlNumber

                })),
                pubKeyStrCert: cerKey
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(ret)
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
        const response = await axios.post(
            'https://cemesatelcyper-001-site1.mtempurl.com/aes/decrypt',
            data,
            {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Accept": "/*"
                }
            }
        );
        if (response.status === 200) {
            return JSON.parse(response.data.plainText)
        }
        else {
            return null
        }
        //return response.data;
    } catch (error) {
        if (error.response) {
            // Error de respuesta del servidor
            console.error(`Error ${error.response.status}:`, error.response.data);
        } else if (error.request) {
            // La solicitud se hizo, pero no hubo respuesta
            console.error("No hubo respuesta del servidor", error.request);
        } else {
            // Algo salió mal en la configuración de la solicitud
            console.error("Error en la configuración de la solicitud", error.message);
        }

        return { success: false, error: error.message };
    }
};

const startPayment = async ({
    routerFunction,
    setLoaderFunction,
    amount,
    controlNumber,
    user,
    modalityId,
    invoice
}) => {
    const course = JSON.parse(localStorage.getItem('course'))
    let modality
    if(course && course.modality_id===1){
        modality = 'presencial'
    }
    if(course && course.modality_id===2){
        modality = 'en_linea'
    }
    if (Payment && course && course.course_price !== 0) {
        Payment.setEnv("pro");
        let xOBJ;
        xOBJ = await cypherData({
            amount: `1.00`,
            controlNumber: controlNumber
        });
        Payment.startPayment({
            Params: xOBJ,
            onClosed: function (res) {
                setLoaderFunction()
                console.log('closed', res);
            },
            onError: function (res) {
                setLoaderFunction()
                console.log('error', res);
            },
            onSuccess: async function (res) {
                if (res.data) {
                    let datatoValue = {
                        vi: dataToObject.vi,
                        salt: dataToObject.salt,
                        passPhrase: dataToObject.passPhrase,
                        cypherData: res.data
                    }
                    const cypherMessage = await getCypherData(datatoValue)
                    if (cypherMessage && cypherMessage.resultadoPayw === 'A' && routerFunction) {
                        routerFunction()
                        await addPayment({
                            data: {
                                course_id: course.course_id,
                                student_id: user.student_id,
                                payment_successfull: 1,
                                payment_amount: 1.00,
                                payment_reference: controlNumber,
                                payment_invoice: invoice,
                                payment_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                                payment_modality: !modalityId ? modality : modalityId
                            }
                        })
                    }
                }
            },
            onCancel: function (res) {
                setLoaderFunction()
                console.log('cancel', res)
            },
        });
    }
}
export { cypherData, getCypherData, startPayment };