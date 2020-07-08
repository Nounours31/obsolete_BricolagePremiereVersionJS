'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-08 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1581';
    this._commitGIT = '12364e80d5265dd7fc99118a2683a09d68a85dc3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}