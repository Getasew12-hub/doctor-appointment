export const EMAIL_VERIFY_TEMPLETE=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            background-color: #f4f7f6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            text-align: center;
            margin: 20px;
        }
        .header {
            color: #1a1a1a;
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .subheader {
            color: #555555;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .verification-code {
            font-size: 48px;
            font-weight: 700;
            color: #2e86de;
            letter-spacing: 5px;
            background-color: #eaf3ff;
            display: inline-block;
            padding: 15px 30px;
            border-radius: 8px;
            border: 1px dashed #2e86de;
            margin-bottom: 30px;
        }
        .footer-text {
            color: #777777;
            font-size: 14px;
            margin-top: 20px;
        }
        .logo {
            margin-bottom: 20px;
        }
        .logo img {
            width: 80px;
        }
    </style>
</head>
<body>
    <div class="container">
      
        <div class="header">
            Verify Your Email Address
        </div>
        <div class="subheader">
            Thank you for registering! Please use the following code to complete your email verification.
        </div>
        <div class="verification-code">
            {verficationCode}
        </div>
        <div class="footer-text">
            If you did not request this, please ignore this email.
        </div>
    </div>
</body>
</html>`;


export const EMAIL_PASSWOD_FORGET=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            background-color: #f4f7f6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            text-align: center;
            margin: 20px;
        }
        .header {
            color: green;
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .subheader {
            color: #555555;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .verification-code {
           
            font-weight: 700;
            color: green;
            letter-spacing: 5px;
            background-color: #eaf3ff;
            display: inline-block;
            padding: 15px 30px;
            border-radius: 8px;
            border: 1px dashed green;
            margin-bottom: 30px;
            
        }
        .footer-text {
            color: #777777;
            font-size: 14px;
            margin-top: 20px;
        }
        .logo {
            margin-bottom: 20px;
        }
        .logo img {
            width: 80px;
        }
    </style>
</head>
<body>
    <div class="container">
      
        <div class="header">
            passwod reset
        </div>
        <div class="subheader">
            Click the button to reset password.
        </div>
    <a href="{passwordrest}" target="_blank">    <button class="verification-code">
            Reset password
        </button></a>
        <div class="footer-text">
            If you did not request this, please ignore this email.
        </div>
    </div>
</body>
</html>`



export const PAYMENT_SECCESSFUL=`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Confirmed</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; -webkit-font-smoothing: antialiased;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <tr>
                        <td align="center" style="background-color: #4CAF50; padding: 40px 20px;">
                            <div style="background-color: rgba(255,255,255,0.2); width: 60px; height: 60px; line-height: 60px; border-radius: 50%; margin-bottom: 20px;">
                                <span style="font-size: 30px; color: #ffffff;">✓</span>
                            </div>
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Payment Successful!</h1>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 24px; color: #333333; margin: 0;">
                                Hi {username},
                            </p>
                            <p style="font-size: 16px; line-height: 24px; color: #555555; margin: 20px 0;">
                                Good news! We've successfully processed your payment. Your support helps us keep the gears turning.
                            </p>
                            
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f9f9f9; border-radius: 6px; margin: 30px 0;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <p style="margin: 0; font-size: 14px; color: #888888; text-transform: uppercase; letter-spacing: 1px;">Amount Paid</p>
                                        <p style="margin: 5px 0 0; font-size: 32px; font-weight: bold; color: #333333;">{amount}</p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 14px; color: #777777; margin-bottom: 0;">
                                A receipt has been attached to this email for your records. If you have any questions, just hit reply!
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #f4f4f4; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
                            <p style="font-size: 12px; color: #999999; margin: 0;">
                                &copy; 2026 Your Company Name. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`


export const ACCOUNT_CREATED=`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Team!</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                    <tr>
                        <td align="center" style="padding: 40px 40px 20px 40px;">
                            <h1 style="color: #111827; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Welcome, {username}!</h1>
                            <p style="color: #6b7280; font-size: 16px; margin-top: 10px;">Your account has been successfully created.</p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 0 40px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f3f4f6; border-radius: 8px;">
                                <tr>
                                    <td style="padding: 25px;">
                                        <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #374151; text-transform: uppercase;">Your Login Details</p>
                                        <p style="margin: 0; font-size: 15px; color: #4b5563;">
                                            <strong>Username:</strong> {{username}}<br>
                                            <strong>Password:</strong> <span style="font-family: monospace; background: #e5e7eb; padding: 2px 4px; border-radius: 4px;">{password}</span>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding: 35px 40px;">
                            <a href="https://yourwebsite.com/login" style="background-color: #2563eb; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: 600; border-radius: 6px; display: inline-block;">Log In to Your Account</a>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <div style="border-left: 4px solid #f59e0b; background-color: #fffbeb; padding: 15px;">
                                <p style="margin: 0; font-size: 13px; color: #92400e; line-height: 20px;">
                                    <strong>Security Tip:</strong> For your protection, we recommend changing this password immediately after your first login.
                                </p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #f9fafb; padding: 30px; text-align: center;">
                            <p style="font-size: 12px; color: #9ca3af; margin: 0;">
                                If you didn't create this account, please ignore this email or contact support.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`