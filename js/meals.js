const meals = [
    // Супы
    { keyword: "tom_yum", name: "Том Ям с креветкой", price: 365, category: "soup", kind: "fish", count: "450мл", image: "pictures/soup1.jpg" },
    { keyword: "norwegian_soup", name: "Норвежский суп", price: 270, category: "soup", kind: "fish", count: "350мл", image: "pictures/soup2.jpg" },
    { keyword: "philippine_soup", name: "Филиппинская уха", price: 370, category: "soup", kind: "fish", count: "300мл", image: "pictures/soup3.jpg" },
    { keyword: "borscht", name: "Борщ", price: 250, category: "soup", kind: "meat", count: "350мл", image: "pictures/soup4.jpg" },
    { keyword: "pea_soup", name: "Гороховый суп", price: 240, category: "soup", kind: "meat", count: "300мл", image: "pictures/soup5.jpg" },
    { keyword: "pumpkin_soup", name: "Тыквенный суп", price: 190, category: "soup", kind: "veg", count: "400мл", image: "pictures/soup6.jpg" },
    { keyword: "gazpacho", name: "Гаспачо", price: 210, category: "soup", kind: "veg", count: "300мл", image: "pictures/soup7.jpg" },
  
    // Главное блюдо
    { keyword: "lasagna", name: "Лазанья", price: 385, category: "main", kind: "meat", count: "450г", image: "pictures/main1.jpg" },
    { keyword: "chicken_cutlets", name: "Котлеты из курицы", price: 225, category: "main", kind: "meat", count: "400г", image: "pictures/main3.jpg" },
    { keyword: "fried_potato", name: "Жареная картошка с грибами", price: 150, category: "main", kind: "veg", count: "350г", image: "pictures/main2.jpg" },
    { keyword: "vegetable_risotto", name: "Овощной ризотто", price: 250, category: "main", kind: "veg", count: "300г", image: "pictures/main4.jpg" },
    { keyword: "fish_and_chips", name: "Фиш энд чипс", price: 370, category: "main", kind: "fish", count: "400г", image: "pictures/main5.jpg" },
    { keyword: "grilled_salmon", name: "Лосось на гриле", price: 450, category: "main", kind: "fish", count: "400г", image: "pictures/main6.jpg" },

    // Салаты и стартеры
    { keyword: "fish_salad", name: "Рыбный салат", price: 290, category: "salad", kind: "fish", count: "250г", image: "pictures/starter1.jpg" },
    { keyword: "beef_tartar", name: "Говяжий тартар", price: 330, category: "salad", kind: "meat", count: "200г", image: "pictures/starter2.jpg" },
    { keyword: "greek_salad", name: "Греческий салат", price: 210, category: "salad", kind: "veg", count: "300г", image: "pictures/starter3.jpg" },
    { keyword: "bruschetta", name: "Брускетта с помидорами", price: 170, category: "salad", kind: "veg", count: "200г", image: "pictures/starter4.jpg" },
    { keyword: "vegetable_salad", name: "Овощной салат", price: 200, category: "salad", kind: "veg", count: "300г", image: "pictures/starter5.jpg" },
    { keyword: "hummus_plate", name: "Тарелка с хумусом", price: 240, category: "salad", kind: "veg", count: "250г", image: "pictures/starter6.jpg" },

    // Десерты
    { keyword: "chocolate_mousse", name: "Шоколадный мусс", price: 150, category: "dessert", kind: "small", count: "150г", image: "pictures/dessert1.jpg" },
    { keyword: "berry_parfait", name: "Ягодный парфе", price: 180, category: "dessert", kind: "small", count: "150г", image: "pictures/dessert2.jpg" },
    { keyword: "vanilla_cupcake", name: "Кекс с ванилью", price: 130, category: "dessert", kind: "small", count: "120г", image: "pictures/dessert3.jpg" },
    { keyword: "cheesecake", name: "Чизкейк", price: 220, category: "dessert", kind: "medium", count: "200г", image: "pictures/dessert4.jpg" },
    { keyword: "pavlova", name: "Павлова", price: 250, category: "dessert", kind: "medium", count: "200г", image: "pictures/dessert5.jpg" },
    { keyword: "tiramisu", name: "Тирамису", price: 300, category: "dessert", kind: "large", count: "250г", image: "pictures/dessert6.jpg" },

     // Напитки
    { keyword: "tea", name: "Чай", price: 150, category: "drink", kind: "hot", count: "300мл", image: "pictures/drink1.jpg" },
    { keyword: "espresso", name: "Эспрессо", price: 140, category: "drink", kind: "hot", count: "30мл", image: "pictures/drink2.jpg" },
    { keyword: "apple_juice", name: "Сок яблочный", price: 170, category: "drink", kind: "cold", count: "350мл", image: "pictures/drink3.jpg" },
    { keyword: "americano", name: "Американо", price: 130, category: "drink", kind: "hot", count: "250мл", image: "pictures/drink4.jpg" },
    { keyword: "orange_juice", name: "Сок апельсиновый", price: 180, category: "drink", kind: "cold", count: "350мл", image: "pictures/drink5.jpg" },
    { keyword: "iced_tea", name: "Холодный чай", price: 160, category: "drink", kind: "cold", count: "350мл", image: "pictures/drink6.jpg" } 
];
