'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-05 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-352';
    this._commitGIT = 'a61ba75ebbf245dba7acb0886db50b4aea539ac7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}