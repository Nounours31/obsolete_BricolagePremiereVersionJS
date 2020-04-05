'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-05 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1203';
    this._commitGIT = '065c99defe550f1195949102509c24703057cd8b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}