'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-14 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1727';
    this._commitGIT = '58e3e8087e2141202d739ad0ed20d7bac587856f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}