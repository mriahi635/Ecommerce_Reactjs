import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      "navbar": {
        "home": "Home",
        "shop": "Shop",
        "cart": "Cart",
        "signIn": "Sign In",
        "language": "Language",
        "footerText": "Thank you for visiting our website.",
        "navbarHome": "Home",
        "navbarShop": "Shop",
        "navbarCart": "Cart",
        "navbarContact": "Contact"
      },
      "footer": {
        "aboutUs": "About Us",
        "careers": "Careers",
        "ourStores": "Our Stores",
        "ourCares": "Our Cares",
        "termsAndConditions": "Terms & Conditions",
        "privacyPolicy": "Privacy Policy",
        "customerCare": "Customer Care",
        "helpCenter": "Help Center",
        "howToBuy": "How to Buy",
        "trackYourOrder": "Track Your Order",
        "bulkPurchasing": "Corporate & Bulk Purchasing",
        "returnsAndRefunds": "Returns & Refunds",
        "contactUs": "Contact Us",
        "address": "70 Washington Square South, New York, NY 10012, United States",
        "email": "Email: uilib.help@gmail.com",
        "phone": "Phone: +1 1123 456 780",
        "footerDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet."
      },
      "login": {
        "signIn": "Sign In",
        "signUp": "Sign Up",
        "email": "Email",
        "password": "Password",
        "name": "Name",
        "enterEmail": "Enter your email",
        "enterPassword": "Enter your password",
        "enterName": "Enter your name",
        "invalidCredentials": "Invalid credentials",
        "fillAllFields": "Please fill in all fields",
        "incorrectEmail": "Incorrect email",
        "incorrectPassword": "Incorrect password",
        "dontHaveAccount": "Don't have an account?",
        "createAccount": "Create one",
         "alreadyHaveAccount": "Already have an account?"
      },
      "cart": {
        "noItems": "No items are added to the Cart",
        "cartSummary": "Cart Summary",
        "totalPrice": "Total Price:",
        "proceedToCheckout": "Proceed to Checkout"
      },
      "paymentForm": {
        "title": "Payment Form",
        "billing": {
          "title": "Billing Information",
          "fullName": "Full Name",
          "email": "Email Address",
          "phone": "Phone Number",
          "address": "Street Address",
          "city": "City",
          "state": "State/Province",
          "zipCode": "ZIP Code"
        },
        "payment": {
          "method": "Payment Method",
          "acceptedCards": "Accepted Cards",
          "cardName": "Name on Card",
          "cardNumber": "Card Number",
          "cvv": "CVV",
          "expMonth": "Expiration Month",
          "expYear": "Expiration Year",
          "checkout": "Proceed to Checkout"
        }
      },
      "orderConfirmation":{
        "title": "Order Confirmation",
        "name": "Name",
        "email": "Email",
        "phone": "Phone",
        "address": "Address",
        "paymentCard": "Payment Card",
        "cardName": "Name on Card",
        "expiry": "Expiry",
        "total": "Total",
        "success": {
          "title": "Success!",
          "message": "Your order has been successfully confirmed. Redirecting..."
        },
        "confirmButton": "Confirm Order"
      },
    }
  },
  fr: {
    translation: {
      "navbar": {
        "home": "Accueil",
        "shop": "Boutique",
        "cart": "Panier",
        "signIn": "Se connecter",
        "language": "Langue",
        "footerText": "Merci de visiter notre site Web.",
        "navbarHome": "Accueil",
        "navbarShop": "Boutique",
        "navbarCart": "Panier",
        "navbarContact": "Contact"
      },
      "footer": {
        "aboutUs": "À propos de nous",
        "careers": "Carrières",
        "ourStores": "Nos magasins",
        "ourCares": "Nos soins",
        "termsAndConditions": "Conditions générales",
        "privacyPolicy": "Politique de confidentialité",
        "customerCare": "Service client",
        "helpCenter": "Centre d'aide",
        "howToBuy": "Comment acheter",
        "trackYourOrder": "Suivi de commande",
        "bulkPurchasing": "Achats en gros",
        "returnsAndRefunds": "Retours et remboursements",
        "contactUs": "Contactez-nous",
        "address": "70 Washington Square South, New York, NY 10012, États-Unis",
        "email": "Email: uilib.help@gmail.com",
        "phone": "Téléphone: +1 1123 456 780",
        "footerDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet."
      },
      "login": {
        "signIn": "Se connecter",
        "signUp": "S'inscrire",
        "email": "Email",
        "password": "Mot de passe",
        "name": "Nom",
        "enterEmail": "Entrez votre email",
        "enterPassword": "Entrez votre mot de passe",
        "enterName": "Entrez votre nom",
        "invalidCredentials": "Identifiants invalides",
        "fillAllFields": "Veuillez remplir tous les champs",
        "incorrectEmail": "Email incorrect",
        "incorrectPassword": "Mot de passe incorrect",
        "dontHaveAccount": "Vous n'avez pas de compte ?",
        "createAccount": "Créez un compte",
        "alreadyHaveAccount": "Vous avez déjà un compte ?"
        
      },  
      "cart": {
        "noItems": "Aucun article n'a été ajouté au panier",
        "cartSummary": "Résumé du panier",
        "totalPrice": "Prix total :",
        "proceedToCheckout": "Passer à la caisse"
      },
      "paymentForm": {
        "title": "Formulaire de Paiement",
        "billing": {
          "title": "Informations de Facturation",
          "fullName": "Nom Complet",
          "email": "Adresse Email",
          "phone": "Numéro de Téléphone",
          "address": "Adresse",
          "city": "Ville",
          "state": "État/Province",
          "zipCode": "Code Postal"
        },
        "payment": {
          "method": "Méthode de Paiement",
          "acceptedCards": "Cartes Acceptées",
          "cardName": "Nom sur la Carte",
          "cardNumber": "Numéro de Carte",
          "cvv": "CVV",
          "expMonth": "Mois d'Expiration",
          "expYear": "Année d'Expiration",
          "checkout": "Procéder au Paiement"
        }
      },
      "orderConfirmation": {
    "title": "Confirmation de la Commande",
    "name": "Nom",
    "email": "Email",
    "phone": "Téléphone",
    "address": "Adresse",
    "paymentCard": "Carte de paiement",
    "cardName": "Nom sur la carte",
    "expiry": "Expirée",
    "total": "Total",
    "success": {
      "title": "Succès !",
      "message": "Votre commande a été confirmée avec succès. Redirection en cours..."
    },
    "confirmButton": "Confirmer la Commande"
  }
      
    }
  },
  ar: {
    translation: {
      "navbar": {
        "home": "الصفحة الرئيسية",
        "shop": "متجر",
        "cart": "عربة التسوق",
        "signIn": "تسجيل الدخول",
        "language": "اللغة",
        "footerText": "شكراً لزيارة موقعنا الإلكتروني.",
        "navbarHome": "الصفحة الرئيسية",
        "navbarShop": "متجر",
        "navbarCart": "عربة التسوق",
        "navbarContact": "اتصل بنا"
      },
      "footer": {
        "aboutUs": "معلومات عنا",
        "careers": "الوظائف",
        "ourStores": "متاجرنا",
        "ourCares": "رعايتنا",
        "termsAndConditions": "الشروط والأحكام",
        "privacyPolicy": "سياسة الخصوصية",
        "customerCare": "خدمة العملاء",
        "helpCenter": "مركز المساعدة",
        "howToBuy": "كيفية الشراء",
        "trackYourOrder": "تتبع طلبك",
        "bulkPurchasing": "الشراء بالجملة",
        "returnsAndRefunds": "المرتجعات والمبالغ المستردة",
        "contactUs": "اتصل بنا",
        "address": "70 واشنطن سكوير ساوث، نيويورك، نيويورك 10012، الولايات المتحدة الأمريكية",
        "email": "البريد الإلكتروني: uilib.help@gmail.com",
        "phone": "الهاتف: +1 1123 456 780",
        "footerDescription": "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت. أوتور ليبيرو إيد إيت، إن جرافيذا. سيت ديام دويس موريس نولا كورسوس. إيرات إيت ليكتوس فيل أوت سوليسيتيودين إليت أت أميت."
      },
      "login": {
        "signIn": "تسجيل الدخول",
        "signUp": "إنشاء حساب",
        "email": "البريد الإلكتروني",
        "password": "كلمة المرور",
        "name": "الاسم",
        "enterEmail": "أدخل بريدك الإلكتروني",
        "enterPassword": "أدخل كلمة المرور",
        "enterName": "أدخل اسمك",
        "invalidCredentials": "بيانات الاعتماد غير صحيحة",
        "fillAllFields": "يرجى ملء جميع الحقول",
        "incorrectEmail": "البريد الإلكتروني غير صحيح",
        "incorrectPassword": "كلمة المرور غير صحيحة",
        "dontHaveAccount": "ليس لديك حساب؟",
        "createAccount": "أنشئ حساباً",
        "alreadyHaveAccount": "هل لديك حساب بالفعل؟"
      },
      "cart": {
    "noItems": "لم يتم إضافة أي عناصر إلى السلة",
    "cartSummary": "ملخص السلة",
    "totalPrice": "السعر الإجمالي:",
    "proceedToCheckout": "المتابعة للدفع"
    },
    "paymentForm": {
      "title": "نموذج الدفع",
      "billing": {
        "title": "معلومات الفاتورة",
        "fullName": "الاسم الكامل",
        "email": "عنوان البريد الإلكتروني",
        "phone": "رقم الهاتف",
        "address": "عنوان الشارع",
        "city": "المدينة",
        "state": "الولاية/المقاطعة",
        "zipCode": "الرمز البريدي"
      },
      "payment": {
        "method": "طريقة الدفع",
        "acceptedCards": "البطاقات المقبولة",
        "cardName": "الاسم على البطاقة",
        "cardNumber": "رقم البطاقة",
        "cvv": "CVV",
        "expMonth": "شهر الانتهاء",
        "expYear": "سنة الانتهاء",
        "checkout": "انتقل إلى الدفع"
      }
    },
    "orderConfirmation": {
      "title": "تأكيد الطلب",
      "name": "الاسم",
      "email": "البريد الإلكتروني",
      "phone": "الهاتف",
      "address": "العنوان",
      "paymentCard": "بطاقة الدفع",
      "cardName": "الاسم على البطاقة",
      "expiry": "تاريخ الانتهاء",
      "total": "الإجمالي",
      "success": {
        "title": "نجاح!",
        "message": "تم تأكيد طلبك بنجاح. جاري إعادة التوجيه..."
      },
      "confirmButton": "تأكيد الطلب"
    }
    
    }
  }
};

// Initialize i18next with configuration
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'en', // Set initial language dynamically from localStorage
    fallbackLng: 'en', // Default language if no language is set
    interpolation: {
      escapeValue: false // React handles escaping
    },
    react: {
      useSuspense: false // Optional: disables suspense
    }
  });

export default i18n;
