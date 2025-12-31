
const ctx = document.querySelector('.activity-chart');
const ctx2 = document.querySelector('.prog-chart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'Time',
            data: [8, 6, 7, 6, 10, 8, 4],
            backgroundColor: '#1e293b',
            borderWidth: 3,
            borderRadius: 6,
            hoverBackgroundColor: '#60a5fa'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                border: {
                    display: true
                },
                grid: {
                    display: true,
                    color: '#1e293b'
                }
            },
            y: {
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        }
    }
});

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Class GPA',
            data: [0, 5, 0, 10, 5, 15, 10],
            borderColor: '#0891b2',
            tension: 0.4
        },
        {
            label: 'Aver GPA',
            data: [2.5, 5.6, 7.2, 9.15, 4.582, 9.12, 13.25],
            borderColor: '#ca1b04ff',
            tension: 0.4
        }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                ticks: {
                    display: false
                },
                border: {
                    display: false,
                    dash: [5, 5]
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        }
    }
});
function updateCalendar() {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const now = new Date();
    const todayDate = now.getDate();
    const todayDayName = days[now.getDay()];
    const currentMonthName = months[now.getMonth()];

    // 1. Month Update karein
    const monthElement = document.querySelector('.upcoming .header a');
    if (monthElement) {
        monthElement.innerHTML = `${currentMonthName} <i class='bx bx-chevron-down'></i>`;
    }

    // 2. Dates select karein
    const dateItems = document.querySelectorAll('.dates .item');
    
    // Maan lijiye hum center wali date (index 1 ya 2) ko 'Aaj' ki date dikhana chahte hain
    // Ya phir pure row ko aaj ke week ke hisaab se update kar sakte hain.
    // Filhal main "Active" class ko aaj ki date par shift kar raha hoon:
    
    dateItems.forEach((item, index) => {
        // Example logic: center item (index 1) ko hamesha aaj ki date dikhao
        // Isse aapka calendar dynamic dikhega
        let displayDate = new Date();
        displayDate.setDate(todayDate + (index - 1)); // -1 taaki aaj ki date second position par dikhe

        const dayName = days[displayDate.getDay()];
        const dateNum = displayDate.getDate();

        item.querySelector('h5').innerText = dayName;
        item.querySelector('a').innerText = dateNum;

        // Aaj ki date ko highlight (active class) karne ke liye
        if (dateNum === todayDate) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Website load hote hi function run karein
window.onload = updateCalendar;
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('activityChart');

    if (ctx) {
        const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        const todayIndex = new Date().getDay(); 
        // Sunday 0 hota hai, hume use index 6 pe shift karna pad sakta hai agar graph Mon se shuru ho raha hai
        const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: days,
                datasets: [{
                    label: 'Activity',
                    data: [60, 45, 80, 50, 90, 70, 40], // Ye data real feel dega
                    backgroundColor: function(context) {
                        const index = context.dataIndex;
                        return index === adjustedIndex ? '#fff' : 'rgba(255, 255, 255, 0.1)';
                    },
                    borderRadius: 20,
                    borderSkipped: false,
                    barThickness: 8 // Bars ko screenshot jaisa patla rakhne ke liye
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: true }
                },
                scales: {
                    x: {
                        grid: { display: false, drawBorder: false },
                        ticks: { color: '#666', font: { size: 10 } }
                    },
                    y: {
                        display: false, // Y-axis ko hide rakha hai design ke liye
                        beginAtZero: true
                    }
                }
            }
        });
    }
});