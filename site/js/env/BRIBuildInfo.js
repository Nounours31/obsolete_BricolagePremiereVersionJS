'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-17 08:00:03';
    this._versionBuild = 'jenkins-Bricolage-275';
    this._commitGIT = 'ae14fd90b6fe91884e29ec1ccf3f7fb52971f06e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}