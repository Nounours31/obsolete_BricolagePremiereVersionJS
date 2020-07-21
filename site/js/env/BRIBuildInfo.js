'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-21 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1634';
    this._commitGIT = 'f32ad2bba274acc9df2eddc9404e999dad314f96';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}