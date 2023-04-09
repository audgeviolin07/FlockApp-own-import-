import time
import pyotp


key = "NeuralNineMySuperSecretKey"


#Key (for Every 30 Seconds)
totp = pyotp.TOTP(key)
print(totp.now())


input_code = input("Enter Two-Factor Authentication Code: ")


#Verifies 2FA
print(totp.verify(input_code))