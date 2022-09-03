import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, STYLES } from "../../constants";
import CustomHeader from "../../components/CustomHeader";
import EditText from "../../components/EditText";
import CustomButton from "../../components/CustomButton";
import Row from "../../components/Row";
import MyTouchableOpacity from "../../components/MyTouchableOpacity";
import Icon, { IconType } from "../../components/Icons";

export default function SignUpUser() {
  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={"Sign Up"} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.twenty,
          flexGrow: 1,
        }}
      >
        <EditText placeholder={"Name"} />
        <EditText placeholder={"Email"} />
        <EditText placeholder={"Phone"} />
        <EditText placeholder={"Address"} />
        <EditText placeholder={"Password"} password />
        <EditText placeholder={"Confirm Password"} password />

        <Row
          style={{ justifyContent: "space-between", marginTop: SIZES.fifteen }}
        >
          <View style={{ width: "60%" }}>
            <Text style={[FONTS.boldFont18]}>Certification</Text>
            <EditText placeholder={"Certification"} />
          </View>
          <View style={{ width: "35%" }}>
            <Text style={[FONTS.boldFont18]}>Year</Text>
            <EditText placeholder={"Year"} />
          </View>
        </Row>
        <MyTouchableOpacity style={styles.uploadBtn}>
          <Icon
            type={IconType.MaterialCommunityIcons}
            name={"cloud-upload"}
            color={COLORS.primary}
            size={SIZES.twentyFive * 4}
          />
          <Text style={[FONTS.boldFont18]}>Add Certificate Photo</Text>
          <Text style={[FONTS.mediumFont12, { color: COLORS.gray }]}>
            Please Upload clear and Hige Quality Photo
          </Text>
        </MyTouchableOpacity>
        <MyTouchableOpacity>
          <Text
            style={[
              FONTS.boldFont20,
              {
                color: COLORS.black,
                textAlign: "center",
                marginTop: SIZES.twenty,
              },
            ]}
          >
            + Add More Certificate
          </Text>
        </MyTouchableOpacity>

        <CustomButton
          title={"Sign Up"}
          btnStyle={{ marginVertical: SIZES.twentyFive }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  uploadBtn: {
    marginTop: SIZES.twenty,
    borderRadius: SIZES.fifteen,
    borderWidth: 2,
    alignItems: "center",
    borderStyle: "dashed",
    paddingVertical: SIZES.ten,
  },
});
