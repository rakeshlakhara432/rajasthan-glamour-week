package com.example.ui.registration

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.ui.theme.Gold
import com.example.ui.theme.LuxuryBlack
import com.example.ui.theme.LuxuryGrey

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ModelRegistrationScreen(onBack: () -> Unit) {
    var name by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var mobile by remember { mutableStateOf("") }
    var age by remember { mutableStateOf("") }
    var height by remember { mutableStateOf("") }
    var city by remember { mutableStateOf("") }
    var experience by remember { mutableStateOf("") }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("MODEL AUDITION", color = Gold, fontWeight = FontWeight.Bold, letterSpacing = 2.sp) },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = null, tint = Gold)
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = LuxuryBlack)
            )
        },
        containerColor = LuxuryBlack
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .padding(16.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text("Registration Details", color = Color.Gray, fontSize = 14.sp)

            LuxuryTextField(value = name, onValueChange = { name = it }, label = "Full Name")
            LuxuryTextField(value = email, onValueChange = { email = it }, label = "Email Address")
            LuxuryTextField(value = mobile, onValueChange = { mobile = it }, label = "Mobile Number")
            
            Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                LuxuryTextField(value = age, onValueChange = { age = it }, label = "Age", modifier = Modifier.weight(1f))
                LuxuryTextField(value = height, onValueChange = { height = it }, label = "Height (cm)", modifier = Modifier.weight(1f))
            }

            LuxuryTextField(value = city, onValueChange = { city = it }, label = "Current City")
            LuxuryTextField(value = experience, onValueChange = { experience = it }, label = "Experience (Years)")

            Spacer(modifier = Modifier.height(24.dp))

            // Portfolio Attachment Placeholder
            Surface(
                color = LuxuryGrey,
                shape = MaterialTheme.shapes.medium,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(120.dp),
                onClick = { /* TODO: Open Image Picker */ }
            ) {
                Column(
                    modifier = Modifier.fillMaxSize(),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = androidx.compose.ui.Alignment.CenterHorizontally
                ) {
                    Text("Upload Portfolio Images", color = Gold)
                    Text("Min 5 high resolution photos", color = Color.Gray, fontSize = 10.sp)
                }
            }

            Spacer(modifier = Modifier.height(32.dp))

            Button(
                onClick = { /* TODO: Submit to Admin */ },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(56.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Gold, contentColor = LuxuryBlack)
            ) {
                Text("SUBMIT APPLICATION", fontWeight = FontWeight.Bold, letterSpacing = 1.sp)
            }
            
            Spacer(modifier = Modifier.height(32.dp))
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LuxuryTextField(
    value: String,
    onValueChange: (String) -> Unit,
    label: String,
    modifier: Modifier = Modifier
) {
    OutlinedTextField(
        value = value,
        onValueChange = onValueChange,
        label = { Text(label) },
        modifier = modifier.fillMaxWidth(),
        colors = OutlinedTextFieldDefaults.colors(
            focusedBorderColor = Gold,
            unfocusedBorderColor = Color.DarkGray,
            focusedLabelColor = Gold,
            unfocusedLabelColor = Color.Gray,
            focusedContainerColor = LuxuryGrey.copy(alpha = 0.3f),
            unfocusedContainerColor = LuxuryGrey.copy(alpha = 0.3f)
        ),
        shape = MaterialTheme.shapes.medium
    )
}
