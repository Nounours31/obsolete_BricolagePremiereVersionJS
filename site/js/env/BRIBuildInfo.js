'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:13:07';
    this._versionBuild = 'jenkins-Bricolage-104';
    this._commitGIT = 'cda4e3deb6685ddb87d058aacb2ac315926ac5c6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}