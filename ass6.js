// 1..TASK 1



class shoppingCartError(Expection):
   Pass

Cart = []

def addToCart(name, price, quantity):
    if not name:
        raise shoppingCartError("product name is required")

    if not is instance(price,(int, float)) or price <= 0:
        raise ShoppingCartError("Invalid product price")

    if not is instance(quantity,int) or quantity <= 0:
        raise ShoppingCartError("Invalid quantity")


    cart.append({'name': name, 'price': price, 'quantity': quantity})
     return "product added to Cart"


    # try: 
          add to cart('Laptop', 999.99, 1)
          print("product added to cart successfully")
    expect ShoppingCartError as e:
         print(f"Error: {e}")






//1...TASK 2


def checkout():
    if not cart:
        raise ShoppingCartError("Cart is empty.Add items before checkout")


# Simulate checkout Process
total_amount = sum(item['price'] * item['quantity'] for item in cart)
cart.clear()  #clear the cart after checkout
return f"checkout successful. Toatl amount: ${total_amount:.2f}"


#try:
      print(checkout())
expect ShoppingCartError as e:
     print(f"Error: {e}")







  //2







class AuthenticationError(Expection):
    Pass

def login(username, password):
    # Sample valid credentials 
    valid_credentials = {
        'user1' : 'password1',
        'user2' : 'password2'
    }

    if not username:
        raise AuthenticationError("username is required")


    if not password:
        raise AuthenticationError("password is required")


    if username not in valid_credentials or valid_credentials[username] ! = password:
        raise AuthenticationError("Invalid username or password")


    return "login successful"


    #try:
         print(login('user1','password1'))
         print("user logged in successfully")
 expect AuthenticationError as e:
     print(f"Login error: {e}")




     

//3





from datetime import datatime 

Class paymentProcessingError(Exception):
  pass 


def validate_card_number(card_number):
    """simple Luhn algorithm check for validating credit card numbers"""
    def digits_of(n):
         return [int(d) for d in str(n)]
    digits = digits_of(card_number)
    odd_digits = digits[-1::-2]
    even_digits = digits[-2::-2]
    checksum = sum(odd_digits)
    for d in even_digits:
        checksum += sum(digits_of(d * 2))
    return checksum % 10 == 0


def processPayment(amount,card_number,expiration_date):
    if not isinstance(amount,(int,float)) or amount <= 0:
       raise paymentProcessingError("Invalid payment number")


    if not card_number or not validate_card_number(card_number):
       raise paymentProcessingError("Invalid card number")
    

    if not expiration_date:
       raise paymentProcessingError("Invalid expiration date")


    #try:
          exp_date = datetime.strptime(expiration_date, "%m/%y")
          if exp_date < datetime.now():
               raise paymentProcessingError("Invalid expiration date")
    expect valueError:
          raise paymentProcessingError("Invalid expiration date format. MM/YY")
     
    return "payment processed successfully"