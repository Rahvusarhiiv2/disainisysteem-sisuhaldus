---
layout: base
title: Alerts
relative: ../..

eleventyNavigation:
  parent: Components
  key: Alerts
  order: 0
---

# Alerts

## With description

<div class="not-prose font-body rounded border-2 border-gray-50 p-10">
  <div class="rounded bg-yellow-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-base font-medium text-yellow-800">Attention needed</h3>
        <div class="mt-2 text-base text-yellow-700">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">HTML</summary>

  ```html
  <div class="rounded bg-yellow-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-base font-medium text-yellow-800">Attention needed</h3>
        <div class="mt-2 text-base text-yellow-700">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </div>
  ```  
</details>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">Yii2</summary>

  ```php
  use Rahvusarhiiv\Widgets\AlertWithDescription;

  echo AlertWithDescription::widget()
      ->icon('exclamation-triangle')
      ->title('Attention needed')
      ->body('Lorem ipsum dolor sit amet consectetur adipisicing elit.')
      ->render();
  ```  
</details>

## With list

<div class="not-prose rounded border-2 border-gray-50 p-10">
  <div class="rounded bg-red-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-base font-medium text-red-800">There were 2 errors with your submission</h3>
        <div class="mt-2 text-base text-red-700">
          <ul role="list" class="list-disc space-y-1 pl-5">
            <li>Your password must be at least 8 characters</li>
            <li>Your password must include at least one pro wrestling finishing move</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">HTML</summary>

  ```html
  <div class="rounded bg-red-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <!-- Heroicon name: mini/x-circle -->
        <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-base font-medium text-red-800">There were 2 errors with your submission</h3>
        <div class="mt-2 text-base text-red-700">
          <ul role="list" class="list-disc space-y-1 pl-5">
            <li>Your password must be at least 8 characters</li>
            <li>Your password must include at least one pro wrestling finishing move</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  ``` 
</details>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">Yii2</summary>

  ```php
  use Rahvusarhiiv\Widgets\AlertWithList;

  echo AlertWithList::widget()
      ->icon('x-circle')
      ->title('There were 2 errors with your submission')
      ->list(
        [
          'Your password must be at least 8 characters',
          'Your password must include at least one pro wrestling finishing move'
        ]
      )
      ->render();
  ```  
</details>

## With actions

<div class="not-prose rounded border-2 border-gray-50 p-10">
  <div class="rounded bg-green-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-base font-medium text-green-800">Order completed</h3>
        <div class="mt-2 text-base text-green-700">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <button type="button" class="rounded bg-green-50 px-2 py-1.5 text-base font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">View status</button>
            <button type="button" class="ml-3 rounded bg-green-50 px-2 py-1.5 text-base font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">HTML</summary>

  ```html
  <div class="rounded bg-green-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-base font-medium text-green-800">Order completed</h3>
        <div class="mt-2 text-base text-green-700">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <button type="button" class="rounded bg-green-50 px-2 py-1.5 text-base font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">View status</button>
            <button type="button" class="ml-3 rounded bg-green-50 px-2 py-1.5 text-base font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  ``` 
</details>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">Yii2</summary>

  ```php
  use Rahvusarhiiv\Widgets\AlertWithActions;

  echo AlertWithActions::widget()
      ->icon('check-circle')
      ->title('Order completed')
      ->body('Lorem ipsum dolor sit amet consectetur adipisicing elit.')
      ->list(
        [
          ['label' => 'View status', 'url' => '#'],
          ['label' => 'Dismiss', 'url' => '#']
        ]
      )
      ->render();
  ```  
</details>

## With link on right

<div class="not-prose rounded border-2 border-gray-50 p-10">
  <div class="rounded bg-blue-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3 flex-1 md:flex md:justify-between">
        <p class="text-base text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
        <p class="mt-3 text-base md:mt-0 md:ml-6">
          <a href="#" class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
            Details
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">HTML</summary>

  ```html
  <div class="rounded bg-blue-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0"
        <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3 flex-1 md:flex md:justify-between">
        <p class="text-base text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
        <p class="mt-3 text-base md:mt-0 md:ml-6">
          <a href="#" class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
            Details
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </p>
      </div>
    </div>
  </div>

  ```
</details>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">Yii2</summary>

  ```php
  use Rahvusarhiiv\Widgets\AlertWithLinkOnRight;

  echo AlertWithLinkOnRight::widget()
      ->icon('information-circle')
      ->body('A new software update is available. See what’s new in version 2.0.4.')
      ->linkLabel('Details')
      ->linkUrl('#')
      ->render();
  ```  
</details>

## With accent border

<div class="not-prose rounded border-2 border-gray-50 p-10">
  <div class="border-l-4 border-yellow-400 bg-yellow-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-base text-yellow-700">
          You have no credits left.
        </p>
      </div>
    </div>
  </div>
</div>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">HTML</summary>

  ```html
  <div class="border-l-4 border-yellow-400 bg-yellow-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-base text-yellow-700">
          You have no credits left.
        </p>
      </div>
    </div>
  </div>

  ```
</details>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">Yii2</summary>

  ```php
  use Rahvusarhiiv\Widgets\AlertWithAccentBorder;

  echo AlertWithAccentBorder::widget()
      ->icon('exclamation-triangle')
      ->body('You have no credits left.')
      ->render();
  ```  
</details>

## With dismiss button

<div class="not-prose rounded border-2 border-gray-50 p-10">
  <div class="rounded bg-green-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-base font-medium text-green-800">Successfully uploaded</p>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button type="button" class="inline-flex rounded bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
            <span class="sr-only">Dismiss</span>
            <!-- Heroicon name: mini/x-mark -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">HTML</summary>

  ```html
  <div class="rounded bg-green-50 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-base font-medium text-green-800">Successfully uploaded</p>
    </div>
    <div class="ml-auto pl-3">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="inline-flex rounded bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
          <span class="sr-only">Dismiss</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  </div>

```
</details>

<details>
  <summary class="cursor-pointer rounded-sm px-2 py-1.5 mt-4 text-base text-gray-600 bg-gray-50">Yii2</summary>

  ```php
  use Rahvusarhiiv\Widgets\AlertWithDismissButton;

  echo AlertWithDismissButton::widget()
      ->icon('check-circle')
      ->title('Successfully uploaded')
      ->buttonIcon('x-mark')
      ->buttonSrOnly('Dismiss')
      ->buttonOnClick('closeAlert()')
      ->render();
  ```  
</details>
