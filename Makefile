install:
	npm ci

test:
	npm test

test-steps:
	npx jest --testNamePattern step1
	npx jest --testNamePattern step2
	npx jest --testNamePattern step3
	npx jest --testNamePattern step4
	npx jest --testNamePattern step5

all-test:
	npx jest --testNamePattern --silent

lint:
	./node_modules/.bin/eslint .

lint-fix:
	./node_modules/.bin/eslint . --fix

