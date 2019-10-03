'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-03 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-466';
    this._commitGIT = '11b51764dda84e908e24bd0af38947cf07bd32f0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}