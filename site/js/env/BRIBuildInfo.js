'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-07 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-850';
    this._commitGIT = '6a0ffccdf413be2be465ee2ca869883084c94584';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}