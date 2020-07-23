'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-23 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1639';
    this._commitGIT = 'dc841f80ddd2eaa73cf199cb7a73028b0573e808';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}