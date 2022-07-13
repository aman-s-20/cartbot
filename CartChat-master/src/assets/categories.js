import homeappliances from "./images/home-appliances.png";
import electronics from "./images/electronics.png";
import stationery from "./images/stationery.png";
import furniture from "./images/furniture.png";
import clothing from "./images/clothing.png";

const categories = [
  {
    categoryName: "Home Appliances",
    icon: homeappliances,
    subcategories: [
      {
        subcategoryName: "Refrigerators",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/gp/browse.html?node=1380365031&ref_=nav_em_sbc_tvelec_fridges_0_2_9_16",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/refrigerator-store?otracker=nmenu_sub_TVs%20%26%20Appliances_0_Refrigerators",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
      {
        subcategoryName: "Air Conditioners",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/gp/browse.html?node=3474656031&ref_=nav_em_sbc_tvelec_ac_0_2_9_15",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/acnewclp-store?otracker=nmenu_sub_TVs%20%26%20Appliances_0_Air%20Conditioners",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
      {
        subcategoryName: "Washing Machines",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/gp/browse.html?node=1380369031&ref_=nav_em_sbc_tvelec_washing_machine_0_2_9_17",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/washing-machine-store?otracker=nmenu_sub_TVs%20%26%20Appliances_0_Washing%20Machine",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
    ],
  },
  {
    categoryName: "Electronics",
    icon: electronics,
    subcategories: [
      {
        subcategoryName: "TVs",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/gp/browse.html?node=1389396031&ref_=nav_em_sbc_tvelec_television_0_2_9_2",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/television-store?otracker=nmenu_sub_TVs%20and%20Appliances_0_Televisions&otracker=nmenu_sub_TVs%20%26%20Appliances_0_Television",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
      {
        subcategoryName: "Mobiles and Accessories",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/gp/browse.html?node=1389401031&ref_=nav_em_sbc_mobcomp_all_mobiles_0_2_8_2",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_0180682e-bb93-4e4a-831e-07a8384d6f56_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L0_view-all&cid=ZRQ4DKH28K8J",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
      {
        subcategoryName: "Cameras",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/gp/browse.html?node=1388977031&ref_=nav_em_sbc_tvelec_cameras_0_2_9_7",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/camera-clp-store?otracker=nmenu_sub_Electronics_0_Camera",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
    ],
  },
  {
    categoryName: "Clothing and Accessories",
    icon: clothing,
    subcategories: [
      {
        subcategoryName: "Men's Fashion",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/gp/browse.html?node=1968024031&ref_=nav_em_sbc_mfashion_clothing_0_2_10_2",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/clothing-and-accessories/pr?sid=clo&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen&otracker=nmenu_sub_Men_0_Clothing",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
      {
        subcategoryName: "Women's Fashion",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/gp/browse.html?node=1953602031&ref_=nav_em_sbc_wfashion_clothing_0_2_11_2",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/clothing-and-accessories/pr?sid=clo&marketplace=FLIPKART&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&otracker=nmenu_sub_Women_0_Clothing",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
      {
        subcategoryName: "Shoes and Accessories",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/s?k=shoes&ref=nb_sb_noss_2",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
    ],
  },
  {
    categoryName: "School and Stationery",
    icon: stationery,
    subcategories: [
      {
        subcategoryName: "Pens",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/b/ref=OP_revamp21_brands2_1?pf_rd_r=ZW31JKVDCFXQSZPP43Y1&pf_rd_p=cf8e280b-16c8-4d66-b9a2-db7681fe0bce&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-4&pf_rd_t=&pf_rd_i=2454172031&node=22962392031",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/pens-category-store?otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Pens&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Pens",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
      {
        subcategoryName: "Notebooks",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/b/ref=OP_revamp21_brands2_2?pf_rd_r=TK2ED2QYBQJ0QKAHDNQ7&pf_rd_p=cf8e280b-16c8-4d66-b9a2-db7681fe0bce&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-4&pf_rd_t=&pf_rd_i=2454172031&node=22962393031",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/search?q=notebooks&sid=dgv%2Crxj%2Cazx%2Ce6t&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_na&as-pos=2&as-type=RECENT&suggestionId=notebooks%7CNotebooks&requestId=6412d8fb-da33-44d8-bc1d-378b839c3f5c&as-searchtext=notebo",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
      {
        subcategoryName: "Desk Organizers",
        icon: "",
        platforms: [
          {
            name: "Amazon",
            link: "https://www.amazon.in/b/ref=OP_revamp21_brands2_6?pf_rd_r=TX1XWJZAN62SRSVG6T8B&pf_rd_p=cf8e280b-16c8-4d66-b9a2-db7681fe0bce&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-4&pf_rd_t=&pf_rd_i=2454172031&node=22962397031",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/pens-stationery/office-supplies/desk-organizers/pr?sid=dgv,tkw,hlr&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Desk%20Organizers",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
    ],
  },
  {
    categoryName: "Furniture and Home Decor",
    icon: furniture,
    subcategories: [
      {
        subcategoryName: "Desks",
        icon: "",
        platforms: [
          {
            name: "",
            link: "https://www.amazon.in/b/ref=s9_acss_bw_cg_maincat_1b1_w?node=21090996031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-3&pf_rd_r=BGW0TMBN7R4CTDBCZMDY&pf_rd_t=101&pf_rd_p=5b7b8a00-27b1-4748-a4a6-f87bf56cae7a&pf_rd_i=1380441031",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/search?q=office+desk+table&sid=wwe%2Cki7%2Cl1t&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&as-pos=1&as-type=RECENT&suggestionId=office+desk+table%7COffice+Study+Table&requestId=9d8709eb-fc95-4333-97a8-efa1dbc3a550&as-searchtext=office%20des",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
      {
        subcategoryName: "Sofas",
        icon: "",
        platforms: [
          {
            name: "",
            link: "https://www.amazon.in/b/ref=s9_acss_bw_cg_maincat_1d1_w?ie=UTF8&node=5689464031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-3&pf_rd_r=BGW0TMBN7R4CTDBCZMDY&pf_rd_t=101&pf_rd_p=5b7b8a00-27b1-4748-a4a6-f87bf56cae7a&pf_rd_i=1380441031",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/furniture/sofas/pr?sid=wwe,c3z&otracker=nmenu_sub_Home%20%26%20Furniture_0_Sofa",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
      {
        subcategoryName: "Office Chairs",
        icon: "",
        platforms: [
          {
            name: "",
            link: "https://www.amazon.in/b/ref=s9_acss_bw_cg_maincat_1a1_w?node=21492872031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-3&pf_rd_r=BGW0TMBN7R4CTDBCZMDY&pf_rd_t=101&pf_rd_p=5b7b8a00-27b1-4748-a4a6-f87bf56cae7a&pf_rd_i=1380441031",
          },
          {
            name: "Flipkart",
            link: "https://www.flipkart.com/search?q=office+chair&sid=wwe%2Cy7b%2Cfoc&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&as-pos=1&as-type=RECENT&suggestionId=office+chair%7COffice+Study+Chairs&requestId=8426f9c0-dc4b-4716-be54-994222f824cb&as-searchtext=office%20",
          },
          { name: "Snapdeal", link: "" },
        ],
      },
    ],
  },
];

export default categories;
