

var products={
    'white':{
        'plain':{
            'unit_price':200,
            'photo':'v-white.jpg'
        },
        'printed':{
            'unit_price':250,
            'photo':'v-white-personalized.jpg'
        }

    },
    'colored':{
        'plain':{
            'unit_price':300,
            'photo':'v-color.jpg'
        },
        'printed':{
            'unit_price':350,
            'photo':'v-color-personalized.png'
        }

    }
}

//getting the value
var search_params={
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
}

// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
    // 1: above 1.000 units - 20% discount
    // 2: above 500 units - 12% discount
    // 3: above 100 units - 5% discount


// Solution:

$("#quality").val();
$("#style").val();


$(function(){
    function update_params(){
        search_params.quantity =parseInt($("#quantity").val());
        search_params.color=$(".color-option.selected").attr('id');
        search_params.quality=$(".quality-option.selected").attr("id");
        search_params.style= $("#style").val();
        console.log(search_params)
        update_order_details();
    }

    function update_order_details(){
        $(".refresh-loader").show();
     
       var qualityid = "#"+ search_params.quality
       $("#result-quality").html($(qualityid).text());

       var colorid = "#"+search_params.color;
       $("#result-color").html($(colorid).text());

       $("#result-quantity").html(search_params.quantity);
       

      // $("#result-style").html( search_params.style );
    //   selecting values dynamically

    var styleSelector = "#style option[value=" +search_params.style+ "]";
    $("#result-style").html($(styleSelector).text());

    var orderTotal = calculate_total();
     $("#total-price").text( orderTotal );

     window.setTimeout(function(){
        $(".refresh-loader").hide();
     },500)

       
    }


    function calculate_total(){
        var unitPrice = products[search_params.color][search_params.style].unit_price;

        var total = unitPrice * search_params.quantity;

        if(search_params.quantity == "q190"){
            unitPrice *=1.12;
        }
        console.log(total)
       if(search_params.quantity>=1000){
        total*=0.8;
       }else if(search_params.quantity>=500){
        total*=0.88;
       }else if(search_params.quantity>=100){
        total*=0.95;
       }
       return total;
    } 

  update_params()
  $("#quantity").change(function(){
    search_params.quantity = parseInt($("#quantity").val());
    update_order_details();
  })
  $("#style").change(function(){
    search_params.style=$("#style").val();
    update_order_details();
  })

  $(".option-button").click(function(){

  })
    
});
