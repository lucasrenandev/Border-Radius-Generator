// Modo estrito
"use strict"

// Elementos
const container = document.getElementById("container");
const textArea = document.getElementById("text-area");
const borderTopLeft = document.getElementById("border-top-left");
const borderTopRight = document.getElementById("border-top-right");
const borderBottomRight = document.getElementById("border-bottom-right");
const borderBottomLeft = document.getElementById("border-bottom-left");
const inputs = document.querySelectorAll(".input-field input");
const results = document.querySelectorAll(".input-field p");

// Variáveis para adicionar os valores das bordas ao text area
let borderRadius = null;
let webkitBorderRadius = null;
let mozBorderRadius = null;

// Adicionar valores iniciais aos inputs + text area
inputs.forEach((input) => {
    results.forEach((result) => {
        result.textContent = input.getAttribute("value") + "px";
        borderRadius = `border-radius: ${borderTopLeft.value + "px"} ${borderTopRight.value + "px"} ${borderBottomRight.value + "px"} ${borderBottomLeft.value + "px"};`;
        webkitBorderRadius = `-webkit-border-radius: ${borderTopLeft.value + "px"} ${borderTopRight.value + "px"} ${borderBottomRight.value + "px"} ${borderBottomLeft.value + "px"};`;
        mozBorderRadius = `-moz-border-radius: ${borderTopLeft.value + "px"} ${borderTopRight.value + "px"} ${borderBottomRight.value + "px"} ${borderBottomLeft.value + "px"};`;
        textArea.value = `${borderRadius} \n${webkitBorderRadius} \n${mozBorderRadius}`;
    });
});

// Função para gerar as bordas + valores aos inputs e text area
function generateBorderRadius() {
    const topLeft = borderTopLeft.value + "px";
    const topRight = borderTopRight.value + "px";
    const bottomRight = borderBottomRight.value + "px";
    const bottomLeft = borderBottomLeft.value + "px";
    container.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
    results.forEach((result) => {
        if(result.classList.contains("result-1")) {
            result.textContent = topLeft;
            borderRadius = `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            webkitBorderRadius = `-webkit-border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            mozBorderRadius = `-moz-border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            textArea.value = `${borderRadius} \n${webkitBorderRadius} \n${mozBorderRadius}`;
        }
        else if(result.classList.contains("result-2")) {
            result.textContent = topRight;
            borderRadius = `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            webkitBorderRadius = `-webkit-border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            mozBorderRadius = `-moz-border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            textArea.value = `${borderRadius} \n${webkitBorderRadius} \n${mozBorderRadius}`;
        }
        else if(result.classList.contains("result-3")) {
            result.textContent = bottomRight;
            borderRadius = `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            webkitBorderRadius = `-webkit-border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            mozBorderRadius = `-moz-border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            textArea.value = `${borderRadius} \n${webkitBorderRadius} \n${mozBorderRadius}`;
        }
        else {
            result.textContent = bottomLeft;
            borderRadius = `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            webkitBorderRadius = `-webkit-border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            mozBorderRadius = `-moz-border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
            textArea.value = `${borderRadius} \n${webkitBorderRadius} \n${mozBorderRadius}`;
        }
    });
}

// Adicionar evento no documento ao mudar os valores dos inputs
document.addEventListener("change", generateBorderRadius);