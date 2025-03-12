// This is the Google Apps Script code to paste in your Google Apps Script editor
// Do NOT create this file in your project - this is for reference only

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the Google Sheet by ID (replace with your actual Sheet ID)
    const ss = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE');
    const sheet = ss.getSheetByName('Form Responses') || ss.getSheets()[0];
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 
        'Name', 
        'Email', 
        'Phone', 
        'Service', 
        'Preferred Date', 
        'Message'
      ]);
    }
    
    // Append the form data to the sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.date || '',
      data.message || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error processing form submission: ' + error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
