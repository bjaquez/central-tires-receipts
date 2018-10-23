$(function () {


    $("#calculate").on("click", function (event) {
        event.preventDefault();
        let total = parseInt($("#total").val());
        let taxRate = parseFloat($("#tax-rate").val());
        let amount = parseInt($("#amount").val());
        // let type = $('input[name=type]:checked').val()
        let size = $('input[name=size]:checked').val()
        $("#total").val("");
        var disposal = 0;
        var labor = 0;
        var tax = 0;
        var subtotal = 0;
        switch (size) {
            case "small":
                disposal = 3
                labor = 15
                break;
            case "large":
                disposal = 5
                labor = 20
                break;
            case "xlarge":
                disposal = 10
                labor = 20
                break;
            default:
                break;
        }

        
        disposal = disposal * amount
        labor = labor * amount
        
        tax = ((total - (disposal + labor))/taxRate)
        subtotal = (total - (disposal + labor + tax))
        
    
        $("#tax").text("$" + tax.toFixed(2));
        $("#labor").text("$" + labor);
        $("#disposal").text("$" + disposal);
        $("#subtotal").text("$" + subtotal.toFixed(2));
        $("#grand-total").text("$" + total);
    })












})