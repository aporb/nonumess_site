# Deploying to Dreamhost Shared Hosting

This guide walks through the process of deploying your Astro site to Dreamhost shared hosting.

## Step 1: Build Your Site for Production

First, build your Astro site to generate static files:

```bash
npm run build
```

This will create a `dist` directory containing all the static files needed for your website.

## Step 2: Set Up FTP/SFTP Access

1. Log in to your Dreamhost panel at https://panel.dreamhost.com/
2. Navigate to "Users" → "Manage Users"
3. Either use your existing FTP user or create a new one
4. Make note of:
   - FTP/SFTP hostname (usually `ftp.yourdomain.com` or `sftp.dreamhost.com`)
   - Username
   - Password
   - Port (21 for FTP, 22 for SFTP)

## Step 3: Upload Files to Dreamhost

### Option A: Using an FTP Client (Recommended)

1. Download and install an FTP client like [FileZilla](https://filezilla-project.org/) or [Cyberduck](https://cyberduck.io/)
2. Connect to your Dreamhost server using the credentials from Step 2
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

## Step 4: Configure Domain Settings (If Needed)

If this is a new domain or subdomain:

1. Log in to your Dreamhost panel
2. Go to "Domains" → "Manage Domains"
3. Add your domain or subdomain if it's not already set up
4. Point it to the directory where you uploaded your files
5. Wait for DNS propagation (can take up to 24-48 hours for new domains)

## Step 5: Verify Your Deployment

1. Visit your website in a browser to ensure everything is working correctly
2. Check that all pages, images, and functionality work as expected
3. Test your form to make sure it connects to Google Sheets properly

## Troubleshooting Common Issues

### 404 Errors or Missing Files
- Make sure you uploaded all files from the `dist` directory
- Check file permissions (files should be 644, directories 755)
- Verify the domain is pointing to the correct directory

### Form Not Working
- Confirm your Google Apps Script is deployed and accessible
- Check browser console for any JavaScript errors
- Verify CORS settings if needed

### Broken Links
- Astro uses relative paths by default, which should work fine
- If you're using a subdirectory, you might need to update the `base` in your `astro.config.mjs`

## Updating Your Site

When you need to update your site:

1. Make your changes locally
2. Run `npm run build` again
3. Upload the new `dist` contents to your Dreamhost directory, replacing the old files

For larger sites, consider using a deployment script or continuous integration to automate this process.
