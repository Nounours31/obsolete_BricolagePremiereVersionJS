'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-09 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1342';
    this._commitGIT = '8c491180869105ebdd19717da99e771ea9e78015';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}