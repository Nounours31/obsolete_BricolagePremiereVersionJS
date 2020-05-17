'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-17 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1373';
    this._commitGIT = 'f2ec3874e15b4aed561c98ab29f7be03eaaf489e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}