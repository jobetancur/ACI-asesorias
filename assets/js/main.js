let selectValue = document.querySelector('#simulator');
let result = document.querySelector("#result");

selectValue.addEventListener('change', getSelectValue)

function getSelectValue() {
    result.innerHTML = "";

    let value = selectValue.options[selectValue.selectedIndex].text

    if(value === "$200.000.000") {
        result.innerHTML = `
            <div class="result__operation">
                <div class="mensual">
                    <h4>Mensual</h4>
                    <p>$136.000</p>
                </div>
                <div class="quincenal">
                    <h4>Quincenal</h4>
                    <p>$68.000</p>
                </div>
            </div>
        `
    } else if(value === "$150.000.000") {
        result.innerHTML = `
            <div class="result__operation">
                <div class="mensual">
                    <h4>Mensual</h4>
                    <p>$102.000</p>
                </div>
                <div class="quincenal">
                    <h4>Quincenal</h4>
                    <p>$51.000</p>
                </div>
            </div>
        `
    } else if(value === "$120.000.000") {
        result.innerHTML = `
            <div class="result__operation">
                <div class="mensual">
                    <h4>Mensual</h4>
                    <p>$81.600</p>
                </div>
                <div class="quincenal">
                    <h4>Quincenal</h4>
                    <p>$40.800</p>
                </div>
            </div>
        `
    } else if(value === "$100.000.000") {
        result.innerHTML = `
            <div class="result__operation">
                <div class="mensual">
                    <h4>Mensual</h4>
                    <p>$68.000</p>
                </div>
                <div class="quincenal">
                    <h4>Quincenal</h4>
                    <p>$34.000</p>
                </div>
            </div>
        `
    } else if(value === "$80.000.000") {
        result.innerHTML = `
            <div class="result__operation">
                <div class="mensual">
                    <h4>Mensual</h4>
                    <p>$54.400</p>
                </div>
                <div class="quincenal">
                    <h4>Quincenal</h4>
                    <p>$27.200</p>
                </div>
            </div>
        `
    } else if(value === "$70.000.000") {
        result.innerHTML = `
            <div class="result__operation">
                <div class="mensual">
                    <h4>Mensual</h4>
                    <p>$47.600</p>
                </div>
                <div class="quincenal">
                    <h4>Quincenal</h4>
                    <p>$23.800</p>
                </div>
            </div>
        `
    } else if(value === "$60.000.000") {
        result.innerHTML = `
        <div class="result__operation">
            <div class="mensual">
                <h4>Mensual</h4>
                <p>$40.800</p>
            </div>
            <div class="quincenal">
                <h4>Quincenal</h4>
                <p>$20.400</p>
            </div>
        </div>
    `
    } else if(value === "$50.000.000") {
        result.innerHTML = `
            <div class="result__operation">
                <div class="mensual">
                    <h4>Mensual</h4>
                    <p>$34.000</p>
                </div>
                <div class="quincenal">
                    <h4>Quincenal</h4>
                    <p>$17.000</p>
                </div>
            </div>
        `
    } else if(value === "$40.000.000") {
        result.innerHTML = `
        <div class="result__operation">
            <div class="mensual">
                <h4>Mensual</h4>
                <p>$27.200</p>
            </div>
            <div class="quincenal">
                <h4>Quincenal</h4>
                <p>$13.600</p>
            </div>
        </div>
    `
    } else if(value === "$30.000.000") {
        result.innerHTML = `
        <div class="result__operation">
            <div class="mensual">
                <h4>Mensual</h4>
                <p>$20.400</p>
            </div>
            <div class="quincenal">
                <h4>Quincenal</h4>
                <p>$10.200</p>
            </div>
        </div>
    `
    } else if(value === "$20.000.000") {
        result.innerHTML = `
        <div class="result__operation">
            <div class="mensual">
                <h4>Mensual</h4>
                <p>$13.600</p>
            </div>
            <div class="quincenal">
                <h4>Quincenal</h4>
                <p>$6.800</p>
            </div>
        </div>
    `
    } else if (value === "-") {
        result.innerHTML = `
        <div class="result__operation">
            <div class="mensual">
                <h4>Mensual</h4>
                <p>$ --</p>
            </div>
            <div class="quincenal">
                <h4>Quincenal</h4>
                <p>$ --</p>
            </div>
        </div>
    `
    }
}