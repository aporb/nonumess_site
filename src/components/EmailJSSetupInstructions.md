# EmailJS Setup Instructions for NoNuMess Form

Follow these steps to set up EmailJS for your form:

## 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free plan includes 200 emails per month

## 2. Add an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Name your service (e.g., "NoNuMess Form")
6. Note down the **Service ID** for later use

## 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{name}}` - Customer's name
   - `{{email}}` - Customer's email
   - `{{phone}}` - Customer's phone
   - `{{service}}` - Service they're interested in
   - `{{message}}` - Their message
   - `{{preferred_time}}` - Their preferred contact time
4. Set the "To Email" as `nonumessorganizer@gmail.com`
5. Set "Reply To" as `{{reply_to}}` (this will be the customer's email)
6. Save the template and note down the **Template ID**

## 4. Get Your User ID

1. Go to "Account" > "API Keys"
2. Copy your **Public Key** (this is your User ID)

## 5. Update Your Code

1. Replace the placeholders in the Booking.astro file:
   - Replace `YOUR_USER_ID` with your EmailJS Public Key
   - Replace `YOUR_SERVICE_ID` with your Email Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Email Template ID

## 6. Test the Form

1. Fill out the form on your website
2. Submit it to ensure emails are being sent correctly
3. Check that both nonumessorganizer@gmail.com receives the submission and the customer receives a copy

## Important Notes

- The EmailJS free plan includes 200 emails per month
- Each form submission sends 2 emails (one to you, one to the customer)
- You can upgrade your plan if you need more emails
- Make sure your email template is designed to work for both the admin and customer copy
