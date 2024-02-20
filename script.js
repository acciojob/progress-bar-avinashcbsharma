        var currentStep = 0;
        var circles = document.querySelectorAll('.circle');
        var bars = document.querySelectorAll('.bar');
        var prevButton = document.getElementById('prev');
        var nextButton = document.getElementById('next');

        function updateButtons() {
            prevButton.disabled = currentStep === 0;
            nextButton.disabled = currentStep === circles.length - 1;
        }

        function updateProgress() {
            circles.forEach((circle, index) => {
                circle.classList.toggle('active', index === currentStep);
            });
        }

        function next() {
            if (currentStep < circles.length - 1) {
                currentStep++;
                updateProgress();
                updateButtons();
            }
        }

        function prev() {
            if (currentStep > 0) {
                currentStep--;
                updateProgress();
                updateButtons();
            }
        }
    