// This code is code generated.
// Run `./scripts/generate.sh` from the root directory to regenerate it.
import * as types from "./types.generated.ts";

export function setupModule(module: any): types.Module {
  visitNode(module, undefined);
  return module as types.Module;
}

function visitNode(node: any, parent: any) {
  Object.setPrototypeOf(node, getNodeClass(node).prototype);
  node.parent = parent;

  for (const key of Object.keys(node)) {
    const obj = node[key];
    if (typeof obj === "object" && typeof obj.kind === "string") {
      visitNode(obj, node);
    }
  }
}

function getNodeClass(node: any) {
  switch (node.kind) {
    case "ArrayLit":
      return types.ArrayLit;
    case "ArrayPat":
      return types.ArrayPat;
    case "ArrowExpr":
      return types.ArrowExpr;
    case "AssignExpr":
      return types.AssignExpr;
    case "AssignPat":
      return types.AssignPat;
    case "AssignPatProp":
      return types.AssignPatProp;
    case "AssignProp":
      return types.AssignProp;
    case "AwaitExpr":
      return types.AwaitExpr;
    case "BigInt":
      return types.BigInt;
    case "BinExpr":
      return types.BinExpr;
    case "BindingIdent":
      return types.BindingIdent;
    case "BlockStmt":
      return types.BlockStmt;
    case "Bool":
      return types.Bool;
    case "BreakStmt":
      return types.BreakStmt;
    case "CallExpr":
      return types.CallExpr;
    case "CatchClause":
      return types.CatchClause;
    case "Class":
      return types.Class;
    case "ClassDecl":
      return types.ClassDecl;
    case "ClassExpr":
      return types.ClassExpr;
    case "ClassMethod":
      return types.ClassMethod;
    case "ClassProp":
      return types.ClassProp;
    case "ComputedPropName":
      return types.ComputedPropName;
    case "CondExpr":
      return types.CondExpr;
    case "Constructor":
      return types.Constructor;
    case "ContinueStmt":
      return types.ContinueStmt;
    case "DebuggerStmt":
      return types.DebuggerStmt;
    case "Decorator":
      return types.Decorator;
    case "DoWhileStmt":
      return types.DoWhileStmt;
    case "EmptyStmt":
      return types.EmptyStmt;
    case "ExportAll":
      return types.ExportAll;
    case "ExportDecl":
      return types.ExportDecl;
    case "ExportDefaultDecl":
      return types.ExportDefaultDecl;
    case "ExportDefaultExpr":
      return types.ExportDefaultExpr;
    case "ExportDefaultSpecifier":
      return types.ExportDefaultSpecifier;
    case "ExportNamedSpecifier":
      return types.ExportNamedSpecifier;
    case "ExportNamespaceSpecifier":
      return types.ExportNamespaceSpecifier;
    case "ExprOrSpread":
      return types.ExprOrSpread;
    case "ExprStmt":
      return types.ExprStmt;
    case "FnDecl":
      return types.FnDecl;
    case "FnExpr":
      return types.FnExpr;
    case "ForInStmt":
      return types.ForInStmt;
    case "ForOfStmt":
      return types.ForOfStmt;
    case "ForStmt":
      return types.ForStmt;
    case "Function":
      return types.Function;
    case "GetterProp":
      return types.GetterProp;
    case "Ident":
      return types.Ident;
    case "IfStmt":
      return types.IfStmt;
    case "ImportDecl":
      return types.ImportDecl;
    case "ImportDefaultSpecifier":
      return types.ImportDefaultSpecifier;
    case "ImportNamedSpecifier":
      return types.ImportNamedSpecifier;
    case "ImportStarAsSpecifier":
      return types.ImportStarAsSpecifier;
    case "Invalid":
      return types.Invalid;
    case "JSXAttr":
      return types.JSXAttr;
    case "JSXClosingElement":
      return types.JSXClosingElement;
    case "JSXClosingFragment":
      return types.JSXClosingFragment;
    case "JSXElement":
      return types.JSXElement;
    case "JSXEmptyExpr":
      return types.JSXEmptyExpr;
    case "JSXExprContainer":
      return types.JSXExprContainer;
    case "JSXFragment":
      return types.JSXFragment;
    case "JSXMemberExpr":
      return types.JSXMemberExpr;
    case "JSXNamespacedName":
      return types.JSXNamespacedName;
    case "JSXOpeningElement":
      return types.JSXOpeningElement;
    case "JSXOpeningFragment":
      return types.JSXOpeningFragment;
    case "JSXSpreadChild":
      return types.JSXSpreadChild;
    case "JSXText":
      return types.JSXText;
    case "KeyValuePatProp":
      return types.KeyValuePatProp;
    case "KeyValueProp":
      return types.KeyValueProp;
    case "LabeledStmt":
      return types.LabeledStmt;
    case "MemberExpr":
      return types.MemberExpr;
    case "MetaPropExpr":
      return types.MetaPropExpr;
    case "MethodProp":
      return types.MethodProp;
    case "Module":
      return types.Module;
    case "NamedExport":
      return types.NamedExport;
    case "NewExpr":
      return types.NewExpr;
    case "Null":
      return types.Null;
    case "Number":
      return types.Number;
    case "ObjectLit":
      return types.ObjectLit;
    case "ObjectPat":
      return types.ObjectPat;
    case "OptChainExpr":
      return types.OptChainExpr;
    case "Param":
      return types.Param;
    case "ParenExpr":
      return types.ParenExpr;
    case "PrivateMethod":
      return types.PrivateMethod;
    case "PrivateName":
      return types.PrivateName;
    case "PrivateProp":
      return types.PrivateProp;
    case "Regex":
      return types.Regex;
    case "RestPat":
      return types.RestPat;
    case "ReturnStmt":
      return types.ReturnStmt;
    case "Script":
      return types.Script;
    case "SeqExpr":
      return types.SeqExpr;
    case "SetterProp":
      return types.SetterProp;
    case "SpreadElement":
      return types.SpreadElement;
    case "Str":
      return types.Str;
    case "Super":
      return types.Super;
    case "SwitchCase":
      return types.SwitchCase;
    case "SwitchStmt":
      return types.SwitchStmt;
    case "TaggedTpl":
      return types.TaggedTpl;
    case "ThisExpr":
      return types.ThisExpr;
    case "ThrowStmt":
      return types.ThrowStmt;
    case "Tpl":
      return types.Tpl;
    case "TplElement":
      return types.TplElement;
    case "TryStmt":
      return types.TryStmt;
    case "TsArrayType":
      return types.TsArrayType;
    case "TsAsExpr":
      return types.TsAsExpr;
    case "TsCallSignatureDecl":
      return types.TsCallSignatureDecl;
    case "TsConditionalType":
      return types.TsConditionalType;
    case "TsConstAssertion":
      return types.TsConstAssertion;
    case "TsConstructSignatureDecl":
      return types.TsConstructSignatureDecl;
    case "TsConstructorType":
      return types.TsConstructorType;
    case "TsEnumDecl":
      return types.TsEnumDecl;
    case "TsEnumMember":
      return types.TsEnumMember;
    case "TsExportAssignment":
      return types.TsExportAssignment;
    case "TsExprWithTypeArgs":
      return types.TsExprWithTypeArgs;
    case "TsExternalModuleRef":
      return types.TsExternalModuleRef;
    case "TsFnType":
      return types.TsFnType;
    case "TsImportEqualsDecl":
      return types.TsImportEqualsDecl;
    case "TsImportType":
      return types.TsImportType;
    case "TsIndexSignature":
      return types.TsIndexSignature;
    case "TsIndexedAccessType":
      return types.TsIndexedAccessType;
    case "TsInferType":
      return types.TsInferType;
    case "TsInterfaceBody":
      return types.TsInterfaceBody;
    case "TsInterfaceDecl":
      return types.TsInterfaceDecl;
    case "TsIntersectionType":
      return types.TsIntersectionType;
    case "TsKeywordType":
      return types.TsKeywordType;
    case "TsLitType":
      return types.TsLitType;
    case "TsMappedType":
      return types.TsMappedType;
    case "TsMethodSignature":
      return types.TsMethodSignature;
    case "TsModuleBlock":
      return types.TsModuleBlock;
    case "TsModuleDecl":
      return types.TsModuleDecl;
    case "TsNamespaceDecl":
      return types.TsNamespaceDecl;
    case "TsNamespaceExportDecl":
      return types.TsNamespaceExportDecl;
    case "TsNonNullExpr":
      return types.TsNonNullExpr;
    case "TsOptionalType":
      return types.TsOptionalType;
    case "TsParamProp":
      return types.TsParamProp;
    case "TsParenthesizedType":
      return types.TsParenthesizedType;
    case "TsPropertySignature":
      return types.TsPropertySignature;
    case "TsQualifiedName":
      return types.TsQualifiedName;
    case "TsRestType":
      return types.TsRestType;
    case "TsThisType":
      return types.TsThisType;
    case "TsTplLitType":
      return types.TsTplLitType;
    case "TsTupleElement":
      return types.TsTupleElement;
    case "TsTupleType":
      return types.TsTupleType;
    case "TsTypeAliasDecl":
      return types.TsTypeAliasDecl;
    case "TsTypeAnn":
      return types.TsTypeAnn;
    case "TsTypeAssertion":
      return types.TsTypeAssertion;
    case "TsTypeLit":
      return types.TsTypeLit;
    case "TsTypeOperator":
      return types.TsTypeOperator;
    case "TsTypeParam":
      return types.TsTypeParam;
    case "TsTypeParamDecl":
      return types.TsTypeParamDecl;
    case "TsTypeParamInstantiation":
      return types.TsTypeParamInstantiation;
    case "TsTypePredicate":
      return types.TsTypePredicate;
    case "TsTypeQuery":
      return types.TsTypeQuery;
    case "TsTypeRef":
      return types.TsTypeRef;
    case "TsUnionType":
      return types.TsUnionType;
    case "UnaryExpr":
      return types.UnaryExpr;
    case "UpdateExpr":
      return types.UpdateExpr;
    case "VarDecl":
      return types.VarDecl;
    case "VarDeclarator":
      return types.VarDeclarator;
    case "WhileStmt":
      return types.WhileStmt;
    case "WithStmt":
      return types.WithStmt;
    case "YieldExpr":
      return types.YieldExpr;
    default:
      throw new Error("Unknown node kind: " + node.kind);
  }
}