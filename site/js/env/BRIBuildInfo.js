'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-29 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-2033';
    this._commitGIT = '82e63291398d9e1379c4b0c90f394154e5d06600';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}