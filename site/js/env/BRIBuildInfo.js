'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-16 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-395';
    this._commitGIT = '63a19b358b3f795094cf84910f6a1f7615c38595';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}