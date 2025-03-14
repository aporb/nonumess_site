# Deploying to Dreamhost Shared Hosting

This guide walks through the process of deploying your Astro site with EmailJS functionality to Dreamhost shared hosting.

## Step 1: Configure EmailJS (Before Building)

Before building your site for production, make sure you've set up EmailJS:

1. Create an account at [EmailJS.com](https://www.emailjs.com/)
2. Set up an email service and template as described in `src/components/EmailJSSetupInstructions.md`
3. Update the following values in `src/components/Booking.astro`:
   - Replace `YOUR_USER_ID` with your EmailJS Public Key
   - Replace `YOUR_SERVICE_ID` with your Email Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Email Template ID

## Step 2: Build Your Site for Production

Build your Astro site to generate static files:

```bash
npm run build
```

This will create a `dist` directory containing all the static files needed for your website.

## Step 3: Set Up FTP/SFTP Access

1. Log in to your Dreamhost panel at https://panel.dreamhost.com/
2. Navigate to "Users" → "Manage Users"
3. Either use your existing FTP user or create a new one
4. Make note of:
   - FTP/SFTP hostname (usually `ftp.yourdomain.com` or `sftp.dreamhost.com`)
   - Username
   - Password
   - Port (21 for FTP, 22 for SFTP)

## Step 4: Upload Files to Dreamhost

### Option A: Using an FTP Client (Recommended)

1. Download and install an FTP client like [FileZilla](https://filezilla-project.org/) or [Cyberduck](https://cyberduck.io/)
2. Connect to your Dreamhost server using the credentials from Step 3
3. Navigate to your website's directory:
   - For your main domain: `/home/username/yourdomain.com/`
   - For a subdomain: `/home/username/subdomain.yourdomain.com/`
4. Upload all contents from your local `dist` directory to this directory

### Option B: Using the Command Line (Advanced)

If you prefer using the command line, you can use `scp` to upload your files:

```bash
# For the entire dist directory
scp -r ./dist/* username@yourdomain.com:/home/username/yourdomain.com/
```

## Step 5: Configure Domain Settings (If Needed)

If this is a new domain or subdomain:

1. Log in to your Dreamhost panel
2. Go to "Domains" → "Manage Domains"
3. Add your domain or subdomain if it's not already set up
4. Point it to the directory where you uploaded your files
5. Wait for DNS propagation (can take up to 24-48 hours for new domains)

## Step 6: Verify Your Deployment

1. Visit your website in a browser to ensure everything is working correctly
2. Test your form to make sure it connects to EmailJS properly:
   - Fill out the form and submit it
   - Check that nonumessorganizer@gmail.com receives the email
   - Verify that the submitter also receives a copy

## Important Notes About EmailJS

- **No Server-Side Dependencies**: EmailJS works entirely client-side, so you **do not need to SSH into your Dreamhost server to install any dependencies**. All the necessary code is included in the built files.

- **CORS Considerations**: EmailJS handles CORS (Cross-Origin Resource Sharing) automatically, so you don't need to configure anything special on your Dreamhost server.

- **Usage Limits**: The free EmailJS plan includes 200 emails per month. Each form submission sends 2 emails (one to you, one to the customer), so you can handle about 100 form submissions per month. Monitor your usage and upgrade if needed.

## Troubleshooting Common Issues

### Form Not Sending Emails
- Open your browser's developer console (F12) to check for any JavaScript errors
- Verify that you've correctly replaced all the placeholder IDs in the Booking.astro file
- Make sure your EmailJS account is active and the service is properly connected
- Check if you've exceeded your monthly email quota

### 404 Errors or Missing Files
- Make sure you uploaded all files from the `dist` directory
- Check file permissions (files should be 644, directories 755)
- Verify the domain is pointing to the correct directory

### Form Works Locally But Not on Dreamhost
- Make sure you've built the site AFTER configuring EmailJS
- Check if there are any browser console errors related to CORS or network issues
- Verify that your EmailJS template is properly configured

## Updating Your Site

When you need to update your site:

1. Make your changes locally
2. Run `npm run build` again
3. Upload the new `dist` contents to your Dreamhost directory, replacing the old files

For larger sites, consider using a deployment script or continuous integration to automate this process.
