'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-02 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2047';
    this._commitGIT = '0f13c28c3497f3b6624d048c44b5a44d8a478df5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}