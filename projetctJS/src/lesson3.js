let color = "";
let isDrawing = false;

function getRandomColor()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById("color").addEventListener("change", (e) =>
{
    color = e.target.value;
    document.getElementById("eraser").checked = false;
});

function paint(e) {
    if (document.getElementById("eraser").checked)
    {
        e.target.style.backgroundColor = "white";
        return;
    }
    if (document.getElementById("randerColor").checked)
    {
        e.target.style.backgroundColor = getRandomColor();
    }
    else
    {
        e.target.style.backgroundColor = color;
    }
}

document.getElementById("apply").addEventListener("click", () =>
{
    let width = +document.getElementById("width").value;
    let height = +document.getElementById("height").value;
    const canvas = document.getElementById("canvas");
    canvas.innerHTML = "";

    for (let i = 0; i < height; i++)
    {
        let tr = document.createElement("tr");
        for (let j = 0; j < width; j++)
        {
            let td = document.createElement("td");
            td.addEventListener("click", paint);
            td.addEventListener("mousedown", (e) =>
            {
                isDrawing = true;
                paint(e);
            });
            td.addEventListener("mouseover", (e) =>
            {
                if (isDrawing)
                    paint(e);
            });
            tr.appendChild(td);
        }
        canvas.appendChild(tr);
    }
});

window.addEventListener("mouseup", () =>
{
    isDrawing = false;
});

document.getElementById("clearColor").addEventListener("click", () =>
{
    const table = document.getElementById("canvas");
    for (let i = 0; i < table.rows.length; i++)
    {
        for (let j = 0; j < table.rows[i].cells.length; j++)
        {
            table.rows[i].cells[j].style.backgroundColor = "white";
        }
    }
});

document.getElementById("clearCanvas").addEventListener("click", () =>
{
    document.getElementById("canvas").innerHTML = "";
});

window.addEventListener("DOMContentLoaded", () =>
{
    color = document.getElementById("color").value;
});
