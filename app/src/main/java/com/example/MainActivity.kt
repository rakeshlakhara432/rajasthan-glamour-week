package com.example

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.compose.rememberNavController
import com.example.navigation.AppNavGraph
import com.example.ui.home.HomeViewModel
import com.example.ui.theme.RajasthanGlamourTheme

// Final build trigger
class MainActivity : ComponentActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    setContent {
      RajasthanGlamourTheme {
        val navController = rememberNavController()
        val homeViewModel: HomeViewModel = viewModel()
        
        AppNavGraph(
            navController = navController,
            homeViewModel = homeViewModel
        )
      }
    }
  }
}

