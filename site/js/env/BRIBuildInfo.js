'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-06 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1085';
    this._commitGIT = '4882e47cba1fbe72610efbd87b592363206ac68b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}