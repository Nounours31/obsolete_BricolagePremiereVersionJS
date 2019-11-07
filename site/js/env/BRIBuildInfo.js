'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-07 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-603';
    this._commitGIT = '401688fc86d6b1381daa16bbc0320bdc8812cd91';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}