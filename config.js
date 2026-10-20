/* ==========================================================================
 *  EN-MSU Fleet — ค่าตั้งค่าสำหรับหน้าเว็บที่วางบน Web Server ของคณะ
 *  แก้เฉพาะไฟล์นี้เมื่อมีการเปลี่ยน Deployment
 * ========================================================================== */
window.FLEET_CONFIG = {
  // Deployment ID ของ Apps Script (ส่วนกลางของ URL /macros/s/.../exec)
  DEPLOYMENT_ID: 'AKfycbxy7lPjbAqonKqer-CVvji7vvqXDDsmYEk38D5aAvrOyl_1wFn_uknP-DvVLWljvfjECQ',

  // โดเมน Google Workspace ของมหาวิทยาลัย
  DOMAIN: 'msu.ac.th',

  // หน้าหลักของระบบบนเว็บคณะ (ใช้ทำลิงก์ "กลับหน้าหลัก")
  HOME_URL: 'index.html',

  // หน้าเข้าระบบแบบไม่ผูกบัญชี Google (อยู่โฟลเดอร์เดียวกัน)
  APP_URL: 'app.html',

  // เว็บไซต์หลักของคณะ (ปุ่ม "หน้าหลัก")
  FACULTY_URL: 'https://eng.msu.ac.th',

  // อีเมลติดต่อผู้ดูแลระบบ
  CONTACT_EMAIL: 'engneering.msu6@msu.ac.th'
};

(function (c) {
  // API (doPost) ที่หน้าเว็บคณะใช้ดึง/บันทึกข้อมูล
  c.API_URL = 'https://script.google.com/macros/s/' + c.DEPLOYMENT_ID + '/exec';
  // URL แบบผูกโดเมน @msu.ac.th — บังคับให้ Google ใช้บัญชีของมหาวิทยาลัย
  c.GAS_DOMAIN_URL = 'https://script.google.com/a/macros/' + c.DOMAIN + '/s/' + c.DEPLOYMENT_ID + '/exec';
})(window.FLEET_CONFIG);
