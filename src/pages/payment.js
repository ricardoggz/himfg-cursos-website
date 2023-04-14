import Script from "next/script";

const Payment = () => {
  return (
    <>
      <div class="row">
        <div class="col formulario">
          <center>
            <h1>Datos para pagar curso</h1>
          </center>
          <form name="payinfo" id="payinfo" method="POST" target="_blank">
            <div class="row">
              <div class="col">
                <label for="billToFirstName">Nombre:</label>
                <input
                  type="text"
                  name="billToFirstName"
                  required
                  id="billToFirstName"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToLastName">Apellidos:</label>
                <input
                  type="text"
                  name="billToLastName"
                  required
                  id="billToLastName"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToStreet">Calle:</label>
                <input
                  type="text"
                  name="billToStreet"
                  required
                  id="billToStreet"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToStreetNumber">Número de calle:</label>
                <input
                  type="text"
                  name="billToStreetNumber"
                  required
                  id="billToStreetNumber"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToStreet2Col">Colonia:</label>
                <input
                  type="text"
                  name="billToStreet2Col"
                  required
                  id="billToStreet2Col"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToStreet2Del">Delegación:</label>
                <input
                  type="text"
                  name="billToStreet2Del"
                  required
                  id="billToStreet2Del"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToCity">Ciudad:</label>
                <input type="text" name="billToCity" required id="billToCity" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToState">Estado:</label>
                <input
                  type="text"
                  name="billToState"
                  required
                  id="billToState"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToCountry">País:</label>
                <input
                  type="text"
                  name="billToCountry"
                  required
                  id="billToCountry"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToPhoneNumber">Número telefónico:</label>
                <input
                  type="text"
                  name="billToPhoneNumber"
                  required
                  id="billToPhoneNumber"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToPostalCode">Código postal:</label>
                <input
                  type="text"
                  name="billToPostalCode"
                  required
                  id="billToPostalCode"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="billToEmail">Email:</label>
                <input
                  type="text"
                  name="billToEmail"
                  required
                  id="billToEmail"
                />
              </div>
            </div>
            <button type="button" id="botonPOC" name="botonPOC">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Script
        src="https://multicobros.banorte.com/orquestador/lightbox/checkoutV2.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://multicobros.banorte.com/orquestador/resources/js/jquery-3.3.1.js"
        strategy="beforeInteractive"
      />
      <Script id="payment" type="text/javascript" strategy="afterInteractive">
        {`
            Payment.setEnv("pro");
            console.log(Payment)
            var xObjEnc;
            $(document).ready(function () {
            $("#clear").click(function () {
            document.getElementById("respuesta").value = "";
            document.getElementById("codigoAut").value = "";
            document.getElementById("controlN").value = "";
            document.getElementById("fechaRspCte").value = "";
            document.getElementById("paywCode").value = "";
            document.getElementById("referencia").value = "";
            document.getElementById("resultadoPayw").value = "";
            document.getElementById("texto").value = "";
            document.getElementById("infocryp").value = "";
        });


        $("#encrip").click(function () {
            // Reset Values
            document.getElementById("respuesta").value = "";
            document.getElementById("codigoAut").value = "";
            document.getElementById("controlN").value = "";
            document.getElementById("fechaRspCte").value = "";
            document.getElementById("paywCode").value = "";
            document.getElementById("referencia").value = "";
            document.getElementById("resultadoPayw").value = "";
            document.getElementById("texto").value = "";
        });

        $("#botonPOC").click(function () {
            
                xObjEnc = Payment.encrypt({
                params: {
                    MerchantID:'8878254',
                    User:'a8878254',
                    Password:'C0M51him$%',
                    Mode:'AUT',
                    ControlNumber:'HIM001',
                    TerminalID:'8878254',
                    Amount:'1.00',
                    MerchantName:'HIMFG CURSOS',
                    MerchantCity:'CDMX',
                    Language:'ES',
                    CustomeromerRef1:'',
                    CustomerRef2:'',
                    CustomerRef3:'',
                    CustomerRef4:'',
                    CustomerRef5:'',

                    // Merchant Cyb Params
                    FirstName: $("#billToFirstName").val(),
                    LastName: $("#billToLastName").val(),
                    Street: $("#billToStreet").val(),
                    StreetNumberInt: $("#billToStreetNumber").val(),
                    StreetNumberExt: '',
                    Col: $("#billToStreet2Col").val(),
                    Del: $("#billToStreet2Del").val(),
                    City: $("#billToCity").val(),
                    State: $("#billToState").val(),
                    Country: $("#billToCountry").val(),
                    PhoneNumber: $("#billToPhoneNumber").val(),
                    PostalCode: $("#billToPostalCode").val(),
                    Email: $("#billToEmail").val(),
                    CustomerID: '',
                    CustomerPassword: '',
                    DateOfBirth: '',
                    Hostname: '',
                    BrowserEmail: '',
                    IpAddress: '',
                    Comments: '',

                    // Merchant Ship Params
                    ShipFirstName: '',
                    ShipToLastName: '',
                    ShipStreetNumberInt: '',
                    ShipStreetNumberExt: '',
                    ShipCol: '',
                    ShipDel: '',
                    ShipCity: '',
                    ShipState: '',
                    ShipCountry: '',
                    ShipPostalCode: '',
                    ShipPhoneNumber: '',
                    ShipShippingMethod: '',

                    // MerchantDataFields Params
                    CustomDataField1: '',
                    CustomDataField2: '',
                    CustomDataField3: '',
                    CustomDataField4: '',
                    CustomDataField5: '',
                    CustomDataField8: '',

                    // NUEVOS CAMPOS *******************************
                    CustomDataField6: '',
                    CustomDataField7: '',
                    CustomDataField9: '',
                    CustomDataField10: '',
                    CustomDataField11: '',
                    CustomDataField12: '',
                    CustomDataField13: '',
                    CustomDataField14: '',
                    CustomDataField15: '',
                    CustomDataField16: '',
                    CustomDataField17: '',
                    CustomDataField18: '',
                    CustomDataField19: '',
                    CustomDataField20: '',
                    CustomDataField21: '',
                    CustomDataField22: '',
                    CustomDataField23: '',
                    CustomDataField24: '',
                    CustomDataField25: '',
                    CustomDataField26: '',
                    CustomDataField27: '',
                    CustomDataField28: '',
                    CustomDataField29: '',
                    CustomDataField30: '',
                    CustomDataField31: '',
                    CustomDataField32: '',
                    CustomDataField33: '',
                    CustomDataField34: '',
                    CustomDataField35: '',
                    CustomDataField36: '',
                    CustomDataField37: '',
                    CustomDataField38: '',
                    CustomDataField39: '',
                    CustomDataField40: '',
                    CustomDataField41: '',
                    CustomDataField42: '',
                    CustomDataField43: '',
                    CustomDataField44: '',
                    CustomDataField45: '',
                    CustomDataField46: '',
                    CustomDataField47: '',
                    CustomDataField48: '',
                    CustomDataField49: '',
                    CustomDataField50: '',
                    CustomDataField51: '',
                    CustomDataField52: '',
                    CustomDataField53: '',
                    CustomDataField54: '',
                    CustomDataField55: '',
                    CustomDataField56: '',
                    CustomDataField57: '',
                    CustomDataField58: '',
                    CustomDataField59: '',
                    CustomDataField60: '',
                    CustomDataField61: '',
                    CustomDataField62: '',
                    CustomDataField63: '',
                    CustomDataField64: '',
                    CustomDataField65: '',
                    CustomDataField66: '',
                    CustomDataField67: '',
                    CustomDataField68: '',
                    CustomDataField69: '',
                    CustomDataField70: '',
                    CustomDataField71: '',
                    CustomDataField72: '',
                    CustomDataField73: '',
                    CustomDataField74: '',
                    CustomDataField75: '',
                    CustomDataField76: '',
                    CustomDataField77: '',
                    CustomDataField78: '',
                    CustomDataField79: '',
                    CustomDataField80: '',
                    CustomDataField81: '',
                    CustomDataField82: '',
                    CustomDataField83: '',
                    CustomDataField84: '',
                    CustomDataField85: '',
                    CustomDataField86: '',
                    CustomDataField87: '',
                    CustomDataField88: '',
                    CustomDataField89: '',
                    CustomDataField90: '',
                    CustomDataField91: '',
                    CustomDataField92: '',
                    CustomDataField93: '',
                    CustomDataField94: '',
                    CustomDataField95: '',
                    CustomDataField96: '',
                    CustomDataField97: '',
                    CustomDataField98: '',
                    CustomDataField99: '',
                    CustomDataField100:'',
                }
            });
            
            
            Payment.startPayment({
                params: {
                    crypt: xObjEnc
                },
                onClosed: function (res) {
                    console.log(res)
                },
                onError: function (res) {
                    console.log(res)
                },
                onSuccess: function (res) {
                    var resp = JSON.stringify(res, undefined, 4);
                    console.log(resp);
                },
                onCancel: function (res) {
                    console.log(res)
                }
            });
        });

    });
            `}
      </Script>
    </>
  );
};

export default Payment;
