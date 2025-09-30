const timeTrackingData = [
    {
        "title": "Work",
        "img": "../src/images/images.svg/icon-ellipsis.svg",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "coding",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
];
document.addEventListener('DOMContentLoaded', function() {
    const periodButtons = document.querySelectorAll('.period-btn');
    const activityCardsContainer = document.querySelector('.activity-cards');
    
    // Initialize with weekly data (as shown in the design)
    let currentPeriod = 'weekly';
    updateActiveButton();
    renderActivityCards();
    
    // Add event listeners to period buttons
    periodButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentPeriod = this.dataset.period;
            updateActiveButton();
            renderActivityCards();
        });
    });
    
    function updateActiveButton() {
        periodButtons.forEach(button => {
            if (button.dataset.period === currentPeriod) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    function renderActivityCards() {
        activityCardsContainer.innerHTML = '';
        
        timeTrackingData.forEach(activity => {
            const timeframe = activity.timeframes[currentPeriod];
            const prevText = getPreviousPeriodText(currentPeriod);
            
            const activityCard = document.createElement('div');
            activityCard.className = `activity-card ${activity.title.toLowerCase().replace(' ', '-')}`;
            
            activityCard.innerHTML = `
               
                <div class="activity-card-content">
                    <div class="activity-header">
                        <h2 class="activity-title">${activity.title}</h2>
                        <img src="../src/images/images.svg/icon-ellipsis.svg" alt="Menu" class="activity-menu">
                    </div>
                    <div class="activity-hours">${timeframe.current}hrs</div>
                    <div class="activity-prev-period">${prevText} - ${timeframe.previous}hrs</div>
                </div>
            `;
            
            activityCardsContainer.appendChild(activityCard);
        });
    }
    
    function getPreviousPeriodText(period) {
        switch(period) {
            case 'daily': return 'Yesterday';
            case 'weekly': return 'Last Week';
            case 'monthly': return 'Last Month';
            default: return 'Last Period';
        }
    }
});